#!/usr/bin/env node
/*
  Sail&Clean static site builder.

  Edit src/index.html (the single-file source with all five languages), then run:
      npm run build            (or: node tools/build.js)

  It writes plain static files to the repository root, ready for GitHub Pages
  or any web host (Aruba):
      index.html, pulizia/, trasferimenti/, contatti/      Italian
      en/, fr/, de/, es/ (+ their page folders)            other languages
      assets/ (css, js, fonts, images), sitemap.xml, robots.txt, llms.txt,
      404.html, .htaccess
  Every link and asset path is relative, so the same files work at
  https://user.github.io/repo/ and at https://www.your-domain.it/.
  Absolute URLs (canonical, hreflang, sitemap) come from site.config.json.
*/
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

let chromium;
try { ({ chromium } = require("playwright")); }
catch (e) { console.error("Playwright is required: npm install && npx playwright install chromium"); process.exit(1); }

const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src", "index.html");
const CFG = JSON.parse(fs.readFileSync(path.join(ROOT, "site.config.json"), "utf8"));
const SITE = (process.env.BASE_URL || CFG.baseUrl).replace(/\/?$/, "/");

const LANGS = ["it", "en", "fr", "de", "es"];
const PAGES = ["home", "pulizia", "trasferimenti", "contatti"];
const ROUTES = {
  it: { home: "", pulizia: "pulizia/", trasferimenti: "trasferimenti/", contatti: "contatti/" },
  en: { home: "en/", pulizia: "en/cleaning/", trasferimenti: "en/deliveries/", contatti: "en/contact/" },
  fr: { home: "fr/", pulizia: "fr/nettoyage/", trasferimenti: "fr/convoyage/", contatti: "fr/contact/" },
  de: { home: "de/", pulizia: "de/reinigung/", trasferimenti: "de/ueberfuehrung/", contatti: "de/kontakt/" },
  es: { home: "es/", pulizia: "es/limpieza/", trasferimenti: "es/traslados/", contatti: "es/contacto/" },
};
const LOCALE = { it: "it_IT", en: "en_GB", fr: "fr_FR", de: "de_DE", es: "es_ES" };
const DESC_KEY = { home: "home.lead", pulizia: "clean.intro", trasferimenti: "deliv.intro", contatti: "contact.intro" };

/* Find `const NAME={ it:{...}, en:{...}, ... };` in the script and keep only language L. */
function keepLang(js, name, L) {
  const m = new RegExp(`const ${name}\\s*=\\s*\\{`).exec(js);
  if (!m) return js;
  const start = m.index + m[0].length - 1;
  const skipStr = (i) => { const q = js[i]; i++; while (js[i] !== q) { if (js[i] === "\\") i++; i++; } return i; };
  let depth = 0, i = start;
  for (; i < js.length; i++) {
    const ch = js[i];
    if (ch === '"' || ch === "'" || ch === "`") { i = skipStr(i); continue; }
    if (ch === "{") depth++;
    if (ch === "}" && --depth === 0) break;
  }
  const body = js.slice(start + 1, i); // it:{...},en:{...}
  // walk top-level entries
  let d = 0, j = 0, entries = [], from = 0;
  for (; j < body.length; j++) {
    const ch = body[j];
    if (ch === '"' || ch === "'" || ch === "`") { const q = ch; j++; while (body[j] !== q) { if (body[j] === "\\") j++; j++; } continue; }
    if (ch === "{" || ch === "[" || ch === "(") d++;
    else if (ch === "}" || ch === "]" || ch === ")") d--;
    else if (ch === "," && d === 0) { entries.push(body.slice(from, j)); from = j + 1; }
  }
  entries.push(body.slice(from));
  const mine = entries.filter((e) => new RegExp(`^\\s*${L}\\s*:`).test(e));
  if (mine.length !== 1) throw new Error(`keepLang: ${name}.${L} not found`);
  return js.slice(0, start + 1) + mine[0] + js.slice(i);
}

const write = (rel, data) => { const f = path.join(ROOT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, data); };
const hash = (buf) => crypto.createHash("sha1").update(buf).digest("hex").slice(0, 8);
const depthBase = (route) => "../".repeat(route.split("/").filter(Boolean).length);
const rel = (fromRoute, toRoute) => depthBase(fromRoute) + toRoute || "./";

(async () => {
  let html = fs.readFileSync(SRC, "utf8");

  /* ---------- 1. assets out of the single file ---------- */
  const styleM = html.match(/<style>([\s\S]*?)<\/style>/);
  let css = styleM[1];
  css = css.replace(/@font-face\{([^}]*?)src:url\(data:font\/woff2;base64,([A-Za-z0-9+/=]+)\)([^}]*)\}/g, (m, pre, b64, post) => {
    const fam = (pre.match(/font-family:"([^"]+)"/) || [, "font"])[1].toLowerCase().replace(/\W+/g, "-");
    const w = (pre.match(/font-weight:([\d ]+)/) || [, "400"])[1].trim().replace(/\s+/g, "-");
    const st = (pre.match(/font-style:(\w+)/) || [, "normal"])[1];
    const name = `${fam}-${w}${st === "italic" ? "-italic" : ""}.woff2`;
    write(`assets/fonts/${name}`, Buffer.from(b64, "base64"));
    return `@font-face{${pre}src:url(fonts/${name})${post}}`;
  });
  const cssV = hash(css); write("assets/site.css", css);

  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  let js = scripts.map((m) => m[1]).join("\n;\n");
  const images = {};
  js = js.replace(/(\b[A-Za-z_]\w*)\s*([:=])\s*"data:image\/webp;base64,([A-Za-z0-9+/=]+)"/g, (m, name, op, b64) => {
    const file = `assets/img/${name.toLowerCase()}.webp`;
    write(file, Buffer.from(b64, "base64"));
    images[name.toLowerCase()] = b64;
    return `${name}${op}"${file}"`;
  });
  // one script per language: keep only that language in the text tables (T, TX, WO)
  const jsFor = {}, jsV = {};
  for (const L of LANGS) {
    let out = js;
    for (const name of ["T", "TX", "WO"]) out = keepLang(out, name, L);
    jsFor[L] = out; jsV[L] = hash(out);
    write(`assets/site.${L}.js`, out);
  }
  if (fs.existsSync(path.join(ROOT, "assets/site.js"))) fs.unlinkSync(path.join(ROOT, "assets/site.js"));

  // page template: external css/js, SEO head rebuilt per page
  let tpl = html
    .replace(styleM[0], `<link rel="stylesheet" href="{{BASE}}assets/site.css?v=${cssV}">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\n?/, "");
  let first = true;
  tpl = tpl.replace(/<script>[\s\S]*?<\/script>\n?/g, () => (first ? ((first = false), `<script src="{{BASE}}assets/site.{{LANG}}.js?v={{JSV}}"></script>\n`) : ""));
  tpl = tpl.replace(/<meta name="description"[^>]*>\n?/, "")
    .replace(/<link rel="canonical"[\s\S]*?<link rel="alternate" type="text\/plain"[^>]*>\n?/, "")
    .replace(/<meta name="robots"[^>]*>\n?/, "");

  /* ---------- 2. per-language text, from the real renderer ---------- */
  const browser = await chromium.launch();
  const reader = await browser.newPage();

  /* smaller copies of the content photos for phones (srcset) */
  const SMALL = { c1: 800, c2: 800, clean: 800, face: 480 };
  for (const [name, w] of Object.entries(SMALL)) {
    if (!images[name]) continue;
    const b64 = await reader.evaluate(async ({ src, w }) => {
      const im = new Image(); im.src = src; await im.decode();
      const c = document.createElement("canvas"); c.width = w; c.height = Math.round(im.naturalHeight * w / im.naturalWidth);
      const x = c.getContext("2d"); x.imageSmoothingQuality = "high"; x.drawImage(im, 0, 0, c.width, c.height);
      return c.toDataURL("image/webp", 0.84).split(",")[1];
    }, { src: "data:image/webp;base64," + images[name], w });
    write(`assets/img/${name}-${w}.webp`, Buffer.from(b64, "base64"));
  }
  const dict = {};
  for (const L of LANGS) {
    await reader.goto("file://" + SRC + "?lang=" + L + "#home");
    await reader.waitForTimeout(300);
    dict[L] = await reader.evaluate(({ PAGES, DESC_KEY }) => {
      const o = { t: {}, w: {}, c: {}, h: {}, ta: {}, wp: {}, lists: {}, title: {}, desc: {} };
      const take = (sel, key, fn) => document.querySelectorAll(`[${sel}]`).forEach((e) => { const k = e.getAttribute(sel); if (!(k in o[key])) o[key][k] = fn(e); });
      take("data-t", "t", (e) => e.textContent);
      take("data-w", "w", (e) => e.textContent);
      take("data-c", "c", (e) => e.textContent);
      take("data-h", "h", (e) => e.getAttribute("href") || "");
      take("data-ta", "ta", (e) => e.getAttribute("aria-label") || e.getAttribute("alt") || "");
      take("data-wp", "wp", (e) => e.placeholder);
      lists(); woRender(); // eslint-disable-line no-undef
      ["home-c1", "home-c2", "home-why", "clean-groups", "meta-c1", "meta-c2", "clean-ports", "clean-steps", "deliv-steps",
        "deliv-routes", "deliv-costs", "deliv-faq", "f-chips", "wo-ports", "pv-body"].forEach((id) => { const el = document.getElementById(id); if (el) o.lists[id] = el.innerHTML; });
      for (const p of PAGES) { page = p; title(); o.title[p] = document.title; o.desc[p] = t(DESC_KEY[p]); } // eslint-disable-line no-undef
      return o;
    }, { PAGES, DESC_KEY });
  }

  /* ---------- 3. one static page per language and page ---------- */
  const builder = await browser.newContext({ javaScriptEnabled: false });
  const bp = await builder.newPage();
  const ld = JSON.parse(fs.readFileSync(path.join(ROOT, "tools", "schema.json"), "utf8").replaceAll("{{SITE}}", SITE));
  const pagesOut = [];
  for (const L of LANGS) for (const P of PAGES) {
    const route = ROUTES[L][P], BASE = depthBase(route);
    await bp.setContent(tpl.replaceAll("{{BASE}}", BASE).replace("{{LANG}}", L).replace("{{JSV}}", jsV[L]), { waitUntil: "domcontentloaded" });
    const out = await bp.evaluate(({ L, P, BASE, route, D, ROUTES, LANGS, PAGES, SITE, LOCALE, ld }) => {
      const doc = document, H = doc.documentElement;
      const relTo = (r) => BASE + r || "./";
      H.lang = L; H.dataset.page = P; H.dataset.base = BASE;
      // text
      const set = (attr, map, fn) => doc.querySelectorAll(`[${attr}]`).forEach((e) => { const v = map[e.getAttribute(attr)]; if (v != null && v !== "") fn(e, v); });
      set("data-t", D.t, (e, v) => { e.textContent = v; });
      set("data-w", D.w, (e, v) => { e.textContent = v; });
      set("data-c", D.c, (e, v) => { e.textContent = v; });
      set("data-h", D.h, (e, v) => { e.setAttribute("href", v); });
      set("data-wp", D.wp, (e, v) => { e.setAttribute("placeholder", v); });
      set("data-ta", D.ta, (e, v) => { e.setAttribute(e.tagName === "IMG" ? "alt" : "aria-label", v); });
      for (const [id, inner] of Object.entries(D.lists)) { const el = doc.getElementById(id); if (el) el.innerHTML = inner; }
      // only this page's section
      doc.querySelectorAll("section.page").forEach((s) => { if (s.dataset.p === P) s.removeAttribute("hidden"); else s.remove(); });
      // internal links -> real pages in this language
      doc.querySelectorAll('a[href^="#"]').forEach((a) => {
        const id = a.getAttribute("href").slice(1);
        if (PAGES.includes(id)) a.setAttribute("href", relTo(ROUTES[L][id]));
      });
      doc.querySelectorAll("#nav a, footer nav a").forEach((a) => {
        if (a.dataset.p === P) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
      // language menu as crawlable links
      const names = { it: "Italiano", en: "English", fr: "Français", de: "Deutsch", es: "Español" };
      const menu = doc.getElementById("lang-menu");
      if (menu) menu.innerHTML = LANGS.map((l) => `<li><a href="${relTo(ROUTES[l][P])}" hreflang="${l}" lang="${l}"${l === L ? ' aria-current="true"' : ""}>${names[l]}</a></li>`).join("");
      const cur = doc.getElementById("lang-cur"); if (cur) cur.textContent = L.toUpperCase();
      // images visible without JavaScript
      const img = (sel, file) => { const e = doc.querySelector(sel); if (e) e.setAttribute("src", BASE + "assets/img/" + file); };
      img("#img-hero", "hero.webp"); img("#img-c1", "c1.webp"); img("#img-c2", "c2.webp"); img("#img-clean", "clean.webp");
      img("#face", "face.webp"); img("#face-sm", "face.webp"); img("#face-ab", "face.webp"); img("#img-vid", "heel.webp");
      // [small file, its width], [full file, its width], sizes
      const srcset = (sel, [sm, smW], [full, fullW], sizes) => { const e = doc.querySelector(sel); if (!e) return;
        e.setAttribute("srcset", `${BASE}assets/img/${sm} ${smW}w, ${BASE}assets/img/${full} ${fullW}w`); e.setAttribute("sizes", sizes); };
      srcset("#img-c1", ["c1-800.webp", 800], ["c1.webp", 1400], "(max-width: 820px) 100vw, 560px");
      srcset("#img-c2", ["c2-800.webp", 800], ["c2.webp", 1400], "(max-width: 820px) 100vw, 560px");
      srcset("#img-clean", ["clean-800.webp", 800], ["clean.webp", 1500], "(max-width: 880px) 100vw, 600px");
      srcset("#face", ["face-480.webp", 480], ["face.webp", 900], "(max-width: 880px) 90vw, 420px");
      srcset("#face-ab", ["face-480.webp", 480], ["face.webp", 900], "(max-width: 640px) 90vw, 360px");
      srcset("#face-sm", ["face-480.webp", 480], ["face.webp", 900], "96px");
      doc.querySelectorAll(".phead .bg[data-bg]").forEach((b) => { b.style.backgroundImage = `url(${BASE}assets/img/${b.dataset.bg}.webp)`; });
      doc.querySelectorAll("img").forEach((i) => { if (i.id !== "img-hero" && !i.closest(".hdr")) i.setAttribute("loading", "lazy"); });
      // head: title, description, canonical, hreflang, social, structured data
      const head = doc.head, url = SITE + route;
      doc.title = D.title[P];
      const add = (tag, attrs) => { const e = doc.createElement(tag); for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v); head.appendChild(e); return e; };
      add("meta", { name: "description", content: D.desc[P] });
      add("meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" });
      add("link", { rel: "canonical", href: url });
      for (const l of LANGS) add("link", { rel: "alternate", hreflang: l, href: SITE + ROUTES[l][P], "data-rel": relTo(ROUTES[l][P]) });
      add("link", { rel: "alternate", hreflang: "x-default", href: SITE + ROUTES.it[P] });
      add("meta", { property: "og:type", content: "website" });
      add("meta", { property: "og:site_name", content: "Sail&Clean" });
      add("meta", { property: "og:title", content: D.title[P] });
      add("meta", { property: "og:description", content: D.desc[P] });
      add("meta", { property: "og:url", content: url });
      add("meta", { property: "og:image", content: SITE + "og-image.jpg" });
      add("meta", { property: "og:image:width", content: "1200" });
      add("meta", { property: "og:image:height", content: "630" });
      add("meta", { property: "og:locale", content: LOCALE[L] });
      for (const l of LANGS) if (l !== L) add("meta", { property: "og:locale:alternate", content: LOCALE[l] });
      add("meta", { name: "twitter:card", content: "summary_large_image" });
      add("meta", { name: "twitter:title", content: D.title[P] });
      add("meta", { name: "twitter:image", content: SITE + "og-image.jpg" });
      add("meta", { name: "geo.region", content: "IT-SS" });
      add("meta", { name: "geo.placename", content: "Sassari" });
      add("link", { rel: "alternate", type: "text/plain", title: "llms.txt", href: SITE + "llms.txt" });
      if (P === "home") add("link", { rel: "preload", as: "image", href: BASE + "assets/img/hero.webp", fetchpriority: "high" });
      const graph = JSON.parse(JSON.stringify(ld));
      graph["@graph"].push({ "@type": "WebPage", "@id": url + "#webpage", url, name: D.title[P], description: D.desc[P], inLanguage: L,
        isPartOf: { "@id": SITE + "#website" }, about: { "@id": SITE + "#business" } });
      const faq = [...doc.querySelectorAll("#deliv-faq details")].map((d) => ({ "@type": "Question", name: d.querySelector("summary").textContent.trim(),
        acceptedAnswer: { "@type": "Answer", text: d.querySelector("p").textContent.trim() } }));
      if (faq.length) graph["@graph"].push({ "@type": "FAQPage", "@id": url + "#faq", inLanguage: L, isPartOf: { "@id": url + "#webpage" }, mainEntity: faq });
      const s = doc.createElement("script"); s.type = "application/ld+json"; s.textContent = JSON.stringify(graph); head.appendChild(s);
      return "<!DOCTYPE html>\n" + H.outerHTML + "\n";
    }, { L, P, BASE, route, D: dict[L], ROUTES, LANGS, PAGES, SITE, LOCALE, ld });
    write(route + "index.html", out);
    pagesOut.push({ L, P, route });
  }
  await browser.close();

  /* ---------- 4. sitemap, robots, 404, .htaccess, llms.txt ---------- */
  const today = new Date().toISOString().slice(0, 10);
  const sm = ['<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
  for (const { P, route } of pagesOut) {
    sm.push(`  <url>\n    <loc>${SITE + route}</loc>\n    <lastmod>${today}</lastmod>`);
    for (const l of LANGS) sm.push(`    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE + ROUTES[l][P]}"/>`);
    sm.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE + ROUTES.it[P]}"/>\n  </url>`);
  }
  sm.push("</urlset>\n"); write("sitemap.xml", sm.join("\n"));

  write("robots.txt", fs.readFileSync(path.join(ROOT, "tools", "robots.template"), "utf8").replaceAll("{{SITE}}", SITE));
  write("llms.txt", fs.readFileSync(path.join(ROOT, "tools", "llms.template.md"), "utf8").replaceAll("{{SITE}}", SITE));

  const host = new URL(SITE).host, sitePath = new URL(SITE).pathname;
  const onGithub = host.endsWith("github.io");
  write(".htaccess", fs.readFileSync(path.join(ROOT, "tools", "htaccess.template"), "utf8")
    .replaceAll("{{HOST}}", host).replaceAll("{{HOST_RE}}", host.replace(/\./g, "\\.")).replaceAll("{{PATH}}", sitePath)
    .replaceAll("{{HOSTRULE}}", onGithub ? "# " : ""));

  write("404.html", `<!DOCTYPE html>
<html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Pagina non trovata · Sail&amp;Clean</title><meta name="robots" content="noindex">
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#102E50;color:#fff;font:400 18px/1.6 system-ui,sans-serif;text-align:center;padding:24px}
a{color:#fff;font-weight:600}h1{font-size:2.4rem;margin:0 0 8px}p{color:#BFD3E6;margin:0 0 24px}</style></head>
<body><main><h1>Sail&amp;Clean</h1><p>Pagina non trovata · Page not found</p>
<p><a href="${SITE}">Home (IT)</a> · <a href="${SITE}en/">Home (EN)</a></p></main></body></html>
`);
  console.log(`Built ${pagesOut.length} pages for ${SITE}`);
})();

# Moving Sail&Clean to your Aruba domain

The website is now plain static files (HTML, CSS, JavaScript, images). They run the
same on GitHub Pages and on Aruba: no database, no PHP, nothing to install.

You have two ways to do it. **Pick one.**

| | A. Domain at Aruba, site stays on GitHub | B. Domain and site both on Aruba |
|---|---|---|
| Effort | ~15 minutes, once | ~30 minutes the first time |
| Cost | Domain only (free GitHub hosting) | Your Aruba hosting plan |
| Updating the site | Automatic on every change | Automatic (FTP upload) or a zip you upload |
| Email at Aruba | Keeps working | Keeps working |

Both start with the same step.

---

## Step 0 (both options): switch the site to your domain

All addresses in the site (Google, language links, sitemap) must use your real domain.
Run this once from the repository folder, with your domain:

```bash
python3 tools/set-domain.py https://www.YOURDOMAIN.it/              # option B (Aruba hosting)
python3 tools/set-domain.py https://www.YOURDOMAIN.it/ --github-pages   # option A (GitHub hosting)
```

Then commit and push. (Or just tell Claude the domain and it will do this for you.)

Use `https://www.` or no `www`, whichever you prefer, but use the same one everywhere,
including in Google Search Console.

---

## Option A: keep the site on GitHub, connect the Aruba domain

1. **Aruba DNS.** Log in at aruba.it › Area Clienti › your domain › *Gestione DNS*.
   Set these records (delete any other `A` record for `@` and any `CNAME`/`A` for `www`):

   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | phrobert31.github.io. |

   Do **not** touch the `MX` records: they are your email.

2. **GitHub.** Repository › *Settings* › *Pages* › *Custom domain*: type `www.YOURDOMAIN.it`,
   *Save*. When the check turns green (DNS can take a few hours), tick **Enforce HTTPS**.

3. Done. Every push to `main` updates the site.

---

## Option B: move the site to Aruba hosting

You need a Linux hosting plan on the domain. Get the FTP details from
Area Clienti › *Pannello di controllo hosting* › *FTP* (server, user, password).

### B1. Automatic upload on every change (recommended)

In GitHub › repository › *Settings* › *Secrets and variables* › *Actions*:

- **Secrets** (*New repository secret*):
  `ARUBA_FTP_SERVER` (e.g. `ftp.YOURDOMAIN.it`), `ARUBA_FTP_USER`, `ARUBA_FTP_PASSWORD`
- **Variables** (*Variables* tab):
  `ARUBA_DEPLOY` = `true`
  `ARUBA_FTP_DIR` = the web folder on the FTP server, only if it is not the FTP root.
  It is the folder where Aruba's placeholder `index.html` is. End it with `/`.
  `ARUBA_FTP_PROTOCOL` = `ftp` only if the upload fails with an encryption/TLS error
  (the default is the encrypted `ftps`).

Then *Actions* › *Website* › *Run workflow* (or push any change). The *deploy-aruba*
job uploads the site; later runs only upload what changed.

### B2. Manual upload

1. GitHub › *Actions* › latest *Website* run › *Artifacts* › download **sailandclean-website**.
2. Unzip it. Upload **everything inside** (including the hidden `.htaccess` file) to the
   web folder with Aruba's *File Manager* or an FTP program such as FileZilla,
   replacing Aruba's placeholder page.

### After uploading

- Aruba › hosting panel › enable the free **SSL certificate** (Let's Encrypt) for the domain.
  The `.htaccess` file then redirects every visit to `https://` and to one single address
  (`www` or not, as set in Step 0).
- If you used option A before, remove the custom domain in GitHub › Settings › Pages
  and set the domain's DNS back to Aruba's hosting (Aruba can restore the default DNS).

---

## After the move (both options)

1. **Google Search Console** (search.google.com/search-console): add the domain,
   verify it (DNS record at Aruba, or ask Claude to add the HTML tag), then *Sitemaps* ›
   submit `sitemap.xml`.
2. **Bing Webmaster Tools** (bing.com/webmasters): import from Search Console. Bing also
   feeds ChatGPT search.
3. **Google Business Profile**: set the website field to the new address.
4. Update the link on Instagram and YouTube.

## Where things are

| Path | What it is |
|------|------------|
| `src/index.html` | The source: all text in 5 languages, styles and scripts. Edit this. |
| `npm run build` | Regenerates every page from the source (needs Node.js; see README). |
| `index.html`, `pulizia/`, `en/` … | The built pages (do not edit by hand). |
| `assets/` | Shared CSS, JavaScript, fonts and photos. |
| `site.config.json` | The site address used for Google and the sitemap. |
| `tools/set-domain.py` | Changes that address everywhere. |
| `.htaccess` | Aruba server settings (HTTPS, caching, 404 page). Ignored by GitHub. |
| `.github/workflows/website.yml` | Builds the download zip and the optional Aruba upload. |

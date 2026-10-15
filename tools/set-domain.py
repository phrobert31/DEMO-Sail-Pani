#!/usr/bin/env python3
"""Point the built site at a new address (e.g. your Aruba domain).

    python3 tools/set-domain.py https://www.sailandclean.it/
    python3 tools/set-domain.py https://www.sailandclean.it/ --github-pages   # also writes CNAME

Rewrites canonical URLs, language links, sitemap, robots.txt, llms.txt and
structured data in the already-built files, updates site.config.json and
regenerates .htaccess. Needs only Python 3 (no installs). The next
`npm run build` reads the same site.config.json, so both stay in sync.
"""
import json, pathlib, re, sys
from urllib.parse import urlparse

root = pathlib.Path(__file__).resolve().parent.parent
args = [a for a in sys.argv[1:] if not a.startswith("--")]
if not args:
    sys.exit(__doc__)
new = args[0].strip()
if not re.match(r"^https://[^/\s]+(/.*)?$", new):
    sys.exit("Use the full address starting with https://, e.g. https://www.sailandclean.it/")
new = new.rstrip("/") + "/"

cfg_path = root / "site.config.json"
cfg = json.loads(cfg_path.read_text())
old = cfg["baseUrl"].rstrip("/") + "/"
if old == new:
    sys.exit(f"Already set to {new}")

skip = {".git", ".claude", "node_modules", "tools", ".github"}
changed = 0
for f in root.rglob("*"):
    if not f.is_file() or set(f.relative_to(root).parts) & skip:
        continue
    if f.suffix not in {".html", ".xml", ".txt", ".json"}:
        continue
    text = f.read_text(encoding="utf-8")
    if old in text:
        f.write_text(text.replace(old, new), encoding="utf-8")
        changed += 1

cfg["baseUrl"] = new
cfg_path.write_text(json.dumps(cfg, indent=2) + "\n")

u = urlparse(new)
host, path = u.netloc, u.path or "/"
tpl = (root / "tools" / "htaccess.template").read_text()
(root / ".htaccess").write_text(
    tpl.replace("{{HOST}}", host).replace("{{HOST_RE}}", re.escape(host)).replace("{{PATH}}", path)
    .replace("{{HOSTRULE}}", "# " if host.endswith("github.io") else ""))

if "--github-pages" in sys.argv:
    (root / "CNAME").write_text(host + "\n")
    print(f"Wrote CNAME ({host}) for GitHub Pages")

print(f"{old} -> {new}: updated {changed} files, site.config.json and .htaccess")

# Sail&Clean website

Boat cleaning in north Sardinia and boat deliveries across the Mediterranean.
Static site in 5 languages (it, en, fr, de, es), 4 pages each.

## Editing

1. Edit `src/index.html` (texts for all languages are in the `T` and `WO` objects near the end).
   Opening it directly in a browser shows the whole site on one page for a quick preview.
2. Build the pages:
   ```bash
   npm install
   npx playwright install chromium
   npm run build
   ```
3. Commit and push. GitHub Pages publishes the result.

## Moving to your own domain / Aruba

See [docs/ARUBA.md](docs/ARUBA.md).

## Pages

| | Home | Cleaning | Deliveries | Contact |
|---|---|---|---|---|
| it | `/` | `/pulizia/` | `/trasferimenti/` | `/contatti/` |
| en | `/en/` | `/en/cleaning/` | `/en/deliveries/` | `/en/contact/` |
| fr | `/fr/` | `/fr/nettoyage/` | `/fr/convoyage/` | `/fr/contact/` |
| de | `/de/` | `/de/reinigung/` | `/de/ueberfuehrung/` | `/de/kontakt/` |
| es | `/es/` | `/es/limpieza/` | `/es/traslados/` | `/es/contacto/` |

Old links such as `/#pulizia` or `/?lang=en` redirect to the matching page.

# Werkbilder

Lege hier die Bilddateien deiner Kunstwerke ab, benannt passend zu
`src/lib/artworks.ts` (z. B. `01.jpg`, `02.jpg`, …).

Empfehlungen:
- Format: JPG oder WebP
- Mindestbreite: 2000px (für scharfe Vollbildansicht)
- Seitenverhältnis: möglichst nah an 4:5, sonst wird zugeschnitten
- Dateigröße: unter 500 KB pro Bild (vorher komprimieren, z. B. mit squoosh.app)

Next.js Image-Optimierung übernimmt automatisch Resizing, WebP/AVIF-
Konvertierung und Lazy Loading — du musst die Bilder nicht selbst
optimieren, solltest sie aber nicht deutlich größer als nötig hochladen.

Zusätzlich benötigt:
- `/public/images/portrait.jpg` — Porträtfoto für die "Über"-Seite
- `/public/images/og-cover.jpg` — 1200×630px Bild für Social-Media-Vorschau
- `/public/favicon.ico`
- `/public/icon-192.png`, `/public/icon-512.png` — für das Web-App-Manifest

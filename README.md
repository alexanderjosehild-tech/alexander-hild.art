# Alexander Hild — Künstler-Website

Minimalistische, galerie-inspirierte Portfolio-Website. Gebaut mit
Next.js 14 (App Router), React, TypeScript, Tailwind CSS und Framer
Motion. Optimiert für Vercel.

## Enthaltene Features

- Startseite mit animiertem Hero (Cross-Fade großer Werkbilder)
- Galerie mit Vollbildansicht (Lightbox, Tastatur-Navigation, Swipe-fähig)
- Einzelseiten pro Werk (`/gallery/[id]`) mit eigenen SEO-Metadaten
- "Über den Künstler" mit Biografie & Ausstellungshistorie
- Artist Statement als eigene, typografisch reduzierte Seite
- Kontaktformular mit API-Route, Validierung & Spam-Schutz (Honeypot)
- Dunkler & heller Modus (System-Präferenz + manueller Umschalter)
- Vollständig responsive, mobile-first
- SEO: Metadaten, Open Graph, sitemap.xml, robots.txt, Web-App-Manifest
- Performance: next/image-Optimierung, Font-Optimierung, kein Client-JS-
  Overhead durch Server Components wo möglich

---

## 1. Lokal einrichten

Voraussetzung: [Node.js](https://nodejs.org) Version 18.18 oder neuer.

```bash
# Ins Projektverzeichnis wechseln
cd alexander-hild

# Abhängigkeiten installieren
npm install

# Lokalen Entwicklungsserver starten
npm run dev
```

Die Seite ist danach unter `http://localhost:3000` erreichbar.

### Eigene Inhalte einfügen

1. **Werke**: Bearbeite `src/lib/artworks.ts` — Titel, Jahr, Technik,
   Maße und Bildpfad pro Werk.
2. **Bilder**: Lege deine Bilddateien in `public/images/works/` ab
   (siehe `public/images/works/README.md` für Details). Ergänze außerdem:
   - `public/images/portrait.jpg` (Über-Seite)
   - `public/images/og-cover.jpg` (Social-Media-Vorschau, 1200×630px)
   - `public/favicon.ico`
3. **Texte**: Biografie, Ausstellungen und Artist Statement direkt in
   `src/app/about/page.tsx` und `src/app/statement/page.tsx` anpassen.
4. **Kontaktformular**: Standardmäßig wird die Anfrage nur geloggt. Um
   echte E-Mails zu versenden, in `src/app/api/contact/route.ts` einen
   Provider wie [Resend](https://resend.com) einbinden (Code-Kommentar
   ist bereits vorbereitet) und den API-Key als Environment Variable
   hinterlegen.
5. **Domain**: Ersetze `https://alexanderhild.com` in
   `src/app/layout.tsx` und `src/app/sitemap.ts` / `robots.ts` durch
   deine tatsächliche Domain.

---

## 2. Auf GitHub hochladen

Falls du noch kein Git-Repository hast:

```bash
# Im Projektordner
git init
git add .
git commit -m "Initial commit: Alexander Hild Künstlerwebsite"
```

Erstelle als Nächstes ein neues, leeres Repository auf
[github.com/new](https://github.com/new) (ohne README/gitignore, da
bereits vorhanden). Danach:

```bash
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/alexander-hild.git
git push -u origin main
```

Falls du lieber über die GitHub-Desktop-App oder das Web-Interface
hochladen möchtest: Repository auf GitHub erstellen → "uploading an
existing file" wählen → den gesamten Projektordner (außer
`node_modules`) hineinziehen → committen.

---

## 3. Auf Vercel veröffentlichen

1. Gehe zu [vercel.com](https://vercel.com) und melde dich mit deinem
   GitHub-Konto an.
2. Klicke auf **"Add New…" → "Project"**.
3. Wähle dein `alexander-hild`-Repository aus der Liste aus und klicke
   auf **"Import"**.
4. Vercel erkennt Next.js automatisch — die Build-Einstellungen
   (`next build`) müssen nicht angepasst werden.
5. Falls du das Kontaktformular mit einem E-Mail-Provider verbunden
   hast: Unter **"Environment Variables"** die entsprechenden Keys
   (z. B. `RESEND_API_KEY`) eintragen.
6. Klicke auf **"Deploy"**. Nach 1–2 Minuten ist die Seite live unter
   einer `*.vercel.app`-URL.

### Eigene Domain verbinden

Unter **Project → Settings → Domains** deine eigene Domain (z. B.
`alexanderhild.com`) eintragen und die von Vercel angezeigten
DNS-Einträge (A-Record oder CNAME) bei deinem Domain-Anbieter
hinterlegen. Vercel stellt automatisch ein SSL-Zertifikat aus.

### Automatische Updates

Jeder `git push` auf den `main`-Branch löst automatisch ein neues
Deployment aus. Für Vorschau-Deployments genügt ein Push auf einen
anderen Branch oder das Öffnen eines Pull Requests — Vercel erstellt
dafür automatisch eine eigene Vorschau-URL.

---

## Projektstruktur

```
alexander-hild/
├── public/
│   └── images/
│       ├── works/        ← Werkbilder hier ablegen
│       ├── portrait.jpg
│       └── og-cover.jpg
├── src/
│   ├── app/
│   │   ├── page.tsx              Startseite
│   │   ├── gallery/page.tsx      Galerie-Übersicht
│   │   ├── gallery/[id]/page.tsx Einzelwerk-Seite
│   │   ├── about/page.tsx        Über den Künstler
│   │   ├── statement/page.tsx    Artist Statement
│   │   ├── contact/page.tsx      Kontakt
│   │   ├── api/contact/route.ts  Formular-Backend
│   │   ├── sitemap.ts / robots.ts / manifest.ts
│   │   └── layout.tsx            Root-Layout, SEO, Fonts
│   ├── components/                Header, Footer, Hero, Lightbox, …
│   └── lib/artworks.ts            Zentrale Werk-Daten
├── tailwind.config.ts              Design-Tokens (Farben, Typografie)
└── package.json
```

## Design-Tokens

| Rolle | Wert |
|---|---|
| Papier (hell) | `#FAFAF8` |
| Tinte (Text hell) | `#131310` |
| Nacht (Hintergrund dunkel) | `#0C0C0B` |
| Wolke (Text dunkel) | `#F1EFEA` |
| Patina (Akzent) | `#4C5D51` |
| Display-Schrift | Fraunces |
| Fließtext | Inter |

Änderungen an Farben/Typografie zentral in `tailwind.config.ts`
vornehmen — sie wirken sich automatisch auf die gesamte Seite aus.

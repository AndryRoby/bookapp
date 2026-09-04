# bookapp — landing site

Live: https://arling.sk/bookapp/

This repository is the **landing page and web hygiene only** for
bookapp — a spatial digital twin of a home library, modelled in real
millimetres (shelves, cabinets, drawers and books), built as a Flutter
app for Android and Windows. It is a static site: one HTML page, no
build step, no framework.

**This repo does not contain the app's source code.** bookapp itself
is a separate, private repository. Its compiled builds (APK and
Windows zip) are published as GitHub Releases on
[AndryRoby/bookapp](https://github.com/AndryRoby/bookapp) — this site
only links to `releases/latest`.

## What's here

| File | Purpose |
|---|---|
| `index.html` | The landing page — hero, feature grid, screenshots, honest "what it does not do yet" section, download CTAs, license-interest button, FAQ, Slovak summary |
| `robots.txt`, `sitemap.xml` | Search-engine and crawler hygiene, AI crawlers explicitly allowed |
| `manifest.json` | Web app manifest (installable-tab metadata, not a PWA) |
| `favicon.svg` / `.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Icons — "b" monogram in the ARLing hub's dark/amber style |
| `og-image.png` | 1200×630 Open Graph / Twitter card image |
| `assets/` | Screenshots from the app (WebP, optimized) |
| `404.html` | Styled not-found page |
| `health.json` | `{"status":"ok","service":"bookapp"}` — uptime check target |
| `llms.txt` / `llms-full.txt` | Short and full machine-readable summaries for AI crawlers/assistants |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |
| `launch/launch-posts.md` | Researched live communities + ready-to-post launch text (EN/SK) |

## Deploy

Static files served at `https://arling.sk/bookapp/` (a subpath of the
ARLing hub domain, alongside the other `arling.sk/<tool>/` sites).
Push to `main`; GitHub Pages (or the same reverse-proxy/Pages setup
used by the sibling `arling.sk/*` tool repos) serves the directory
as-is. No build step — just static files.

## Editing

Plain HTML/CSS, no framework, no dependencies, no external CDN calls
(fonts are system-stack only; the one external script is the
self-hosted Umami analytics tag). Edit `index.html` directly.

Umami site ID for this page: `f21d767b-6137-4a51-91bb-6352c87bffa2`
(homelab instance at `https://homelab.tailbf8f27.ts.net/script.js`).
Tracked events: `download-apk`, `download-windows`, `license_interest`,
`contact-email`.

## Content policy

This page states plainly, in "What it does not do yet", that
automatic book-thickness measurement from a photo does not work and
is not shipped (see bookapp's own `MERANIE_TEST.md` and
`MERANIE_SAMO.md` for the testing that led to that decision). Do not
soften or remove that section, and do not add promises of features
that don't exist yet — that is a deliberate, owner-approved decision,
not an oversight.

## License / rights

© 2026 ARLing s. r. o. (Bratislava, Slovakia). All rights reserved on
this landing page's content and design. bookapp itself is closed
source; this repo's purpose is solely to host its public landing page
and point at the GitHub Releases where the free public-beta builds
live.

## Contact

andrej@arling.sk · https://arling.sk/

# bookapp

A free, offline app that models a home library as a spatial digital twin in real millimetres, so it knows whether a book fits on a shelf and exactly where.

Live: https://arling.sk/bookapp/

## What it is

bookapp is a free public beta (v0.1.0-beta) for Android and Windows. It models a home library the way you'd model furniture, not a spreadsheet row: shelves, cabinets, drawers and books are all drawn to their true millimetre size. Because both sides are modelled at real size, it can tell you whether a specific book fits on a specific shelf, and exactly where, before you buy either the book or the bookcase.

- **ISBN scanning.** Point a phone camera at a barcode and bookapp fills in title, author and cover.
- **Real-size shelves.** Every shelf, cell, cabinet and drawer at its own true millimetre dimensions, not a generic grid.
- **Fit checking.** See whether a book fits a shelf and cell before buying it, and which one it belongs on, by series, author or snugness.
- **Catalogue** with search, filters and reading-status.
- **Loan tracking.** Who borrowed a book, and their contact info.
- **Reading progress by page**, not by percentage.
- **Ratings** on a 1 to 10 star scale.
- **Backups**, including a silent daily one.
- **MARC21 export/import**, and import from Goodreads and StoryGraph.
- **Phone to PC sync over local Wi-Fi.** No server; you choose the direction.
- **Works offline.** Adding books, browsing shelves and tracking reading need no connection.
- **No account, ever.** The library lives on the device.

## What's in this repo

| File | Purpose |
|---|---|
| `index.html` | The landing page: hero, feature grid, screenshots, an honest "what it does not do yet" section, download links, a license-interest button, FAQ |
| `docs/` | The step-by-step user guide, 12 short chapters. English at `docs/`, Slovak at `docs/sk/` |
| `app.js` | Wires the "would you pay for a full version" button |
| `subscribe.js` | Wires the opt-in "notify me about new tools" email form to the ARLing homelab subscribe API |
| `assets/` | Screenshots from the app, WebP, optimised |
| `robots.txt`, `sitemap.xml` | Search-engine and crawler hygiene; AI crawlers explicitly allowed |
| `manifest.json` | Web app manifest (installable-tab metadata, not a PWA) |
| `favicon.svg` / `.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Icons |
| `og-image.png` | 1200×630 Open Graph / Twitter card image |
| `404.html` | Styled not-found page |
| `health.json` | Uptime check target |
| `llms.txt` / `llms-full.txt` | Short and full machine-readable summaries for AI crawlers and assistants |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |
| `launch/launch-posts.md` | Researched launch communities and ready-to-post text |

This repository's git history is the landing page, docs and this release listing only. It does not contain bookapp's Flutter/Dart source, which is developed privately; only the compiled Android APK and Windows zip are attached here as GitHub Releases.

## What it does not do (yet)

- **No automatic thickness measurement from a photo.** Several methods were tried on real photos of real shelves, including OpenCV-based edge detection, and none were accurate enough to trust: neighbouring books of the same colour, print stronger than the physical edge between spines, and tilted spines all defeated it. bookapp would rather leave a field empty than invent a number, so this is not shipped. A book's thickness is instead measured once with a ruler, or estimated from its format and always labelled "approximately" until corrected.
- **No iPhone or iPad app.** Android and Windows only.
- **Not in Google Play or the Microsoft Store.** Direct download during the beta, while signing and licensing are settled properly. The Android build is signed; it just isn't store-distributed yet.
- **Cover downloads are not automatic.** bookapp fetches book cover thumbnails from Google Books and Open Library only when you tap for one.

## How it works

The app models both furniture and books in real millimetres, so the same coordinate space answers "does this fit" for any shelf, cabinet or drawer. All of that runs on the device: library data lives in a local database, and phone-to-PC sync moves data directly between the two over local Wi-Fi, never through a server or the cloud.

This repository is only the landing page for that app: one static HTML page, a docs subsite, and two small vanilla-JS files (`app.js` for the "would you pay" button, `subscribe.js` for the opt-in email form). No framework, no build step, and no external network calls beyond the self-hosted Umami analytics script.

## Download

Version 0.1.0-beta, free, direct download, not yet on Google Play or the Microsoft Store.

**Android.** APK, arm64, about 35 MB. Works on any 64-bit Android phone from the last several years.
https://github.com/AndryRoby/bookapp/releases/download/v0.1.0-beta/bookapp-0.1.0-android-arm64.apk
Android will warn about installing outside Google Play; allow it for this file. The APK is signed, it just isn't distributed through the store yet.

**Windows.** ZIP, about 41 MB. Unzip and run `bookapp.exe`, no installer, no admin rights.
https://github.com/AndryRoby/bookapp/releases/download/v0.1.0-beta/bookapp-0.1.0-windows-x64.zip
The build is not code-signed yet, so SmartScreen shows "Windows protected your PC." Click "More info", then "Run anyway."

SHA-256 checksums (also published as `SHA256SUMS.txt` on the release):

```
7304092e373e3448c3e78b1ddbb761b67dce19e22f5763090ceb8ea488816ba2  bookapp-0.1.0-android-arm64.apk
d783b253bc41637303096373cc4618b88fdfe22a3baaba302efb46fb811985bc  bookapp-0.1.0-windows-x64.zip
```

Older versions and full release notes: https://github.com/AndryRoby/bookapp/releases

Docs: step-by-step guide at https://arling.sk/bookapp/docs/, Slovak version at https://arling.sk/bookapp/docs/sk/.

## Run locally

There is no build step for this repo. It's static files.

```bash
git clone https://github.com/AndryRoby/bookapp.git
cd bookapp
python -m http.server
# or just open index.html directly in a browser
```

This only runs the landing page; bookapp itself (the Android/Windows app) is downloaded, not built from this repo, see Download above. There is no automated test suite for this static site.

## Privacy

All library data stays on your device in a local database; nothing about your books, shelves or reading history is ever uploaded, and phone-to-PC sync happens directly over your own Wi-Fi, never through a server. This landing page is static and uses a self-hosted Umami instance with no cookies, for anonymous page-view and click counts only, never what you download or type. The optional "notify me about new tools" email signup is voluntary, used for nothing else, and any reply unsubscribes you; full policy at https://arling.sk/privacy/.

## Report a problem

Found something broken on this page, a download link that fails, or a bug in the app itself? Open an issue at https://github.com/AndryRoby/bookapp/issues, or write to andrej@arling.sk. For an app bug, include what you were doing, roughly how large your library is, and whether it's Android or Windows; a screenshot helps.

## License

All rights reserved, © 2026 ARLing s. r. o. (Bratislava, Slovakia), for this landing page and for bookapp itself. The hosted site and the compiled beta builds are free to use, for any purpose, at no cost. Reading `index.html` and the two scripts here is reading the entire site, and that's fine, learn from it. Rehosting this page, repackaging bookapp's builds as your own, or using the bookapp or ARLing name for your own project is not; for anything else (a fix, a translation, a bulk-deployment use case), write to andrej@arling.sk.

---

ARLing s. r. o., Bratislava, Slovakia. andrej@arling.sk

Hub and sibling tools: https://arling.sk/ · https://arling.sk/google-oauth-redirect-doctor/ · https://arling.sk/expo-supabase-auth-doctor/ · https://arling.sk/supabase-redirect-doctor/ · https://arling.sk/flutter-supabase-doctor/ · https://arling.sk/expo-universal-links-doctor/ · https://arling.sk/sepa-pain001-doctor/

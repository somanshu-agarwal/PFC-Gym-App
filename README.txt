
PFC Gym – Installable Web App (PWA)
===================================

What this is:
- A lightweight, offline-capable Progressive Web App containing 47 brain/PFC exercises.
- Features: search, category filters, randomizer, daily plan generator, focus timer, streak tracking,
  local log, and import/export. Add, edit, or delete exercises freely.

How to use on iPhone/Android:
1) Host the folder over HTTPS (e.g., GitHub Pages, Netlify, Vercel). Or any static host.
2) Open the URL in your mobile browser.
3) iOS Safari: tap Share > Add to Home Screen. Android Chrome: Menu > Add to Home screen.
4) The app installs and works offline after first load.

Quick local test on a laptop:
- Use any simple static server (Python: `python -m http.server 8080`) from the app folder.
- Visit http://localhost:8080 then use your phone on the same network, or just test on your laptop.
- Service Workers don't run from file:// so a local server is required.

Safety:
- For education only; not medical advice. Skip anything unsafe or contraindicated.
- Biohacker items are unverified; act responsibly and legally.

Generated: 2025-08-31T13:25:09.649485

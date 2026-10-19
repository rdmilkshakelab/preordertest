# Preorder Tester

A browser-based sandbox where you can race through fake preorder flows for Apple, Nintendo, PlayStation, and Xbox storefronts.

Features:
- Official-brand-style preorder terminals
- Fake login, payment, and anti-bot failure states
- Speed-based scoring and local best times
- No real payments, no real authentication, no actual orders

How to run:
1. Open `index.html` directly in a browser, or
2. Serve the folder with a simple web server, for example:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

This is intentionally a sandbox experience only.

---

Project notes:
- The app is pure HTML/CSS/JavaScript, so there are no install steps required.
- Best times are stored in browser local storage under the key `preorderScrimBestTimes`.
- The interface is designed to feel like an official preorder terminal while remaining fake and harmless.



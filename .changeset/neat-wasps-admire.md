---
'scoobie': major
---

Replace Mermaid plugin to be backed by Playwright

Previously, the Mermaid plugin was backed by Puppeteer. This change replaces this via `mermaid-isomorphic`, in turn backed by Playwright.

There are some consequences for Mermaid users:

- Output changes (you should review and tweak these)
- You'll no longer need to install puppeteer and manage it in e.g. your Dockerfiles
- Before running builds with this change, you'll need to install `mermaid-isomorphic` (which is now a `scoobie` peer dependency), and `playwright` in order to run `<packageManager> playwright install chromium`. This could form a postinstall script.

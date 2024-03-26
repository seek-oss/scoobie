# Mermaid configuration

This directory contains a modified version of [remark-mermaid].

[remark-mermaid]: https://github.com/temando/remark-mermaid

Changes:

- Generated SVGs are saved to this directory
- Dangerous Puppeteer hacks that make it work in Docker
- Base `mermaid.config.json` and `style.css` inspired by the Braid APAC theme
- Custom per-diagram `.mmd.json`
- Caching of rendered code blocks
- Typescriptified

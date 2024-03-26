---
'scoobie': major
---

Upgrade to MDX v3 (from v1). scoobie has attempted to patch over any breaking changes, so it may not require manual changes in your package. However:

- MDX v2/v3 have syntactical differences, so you may need to update your MDX files. Review https://mdxjs.com/migrating/v2/#update-mdx-content.
- If you previously installed `@mdx-js/loader` v1 as a peer dependency, remove it. It's now bundled as a dependency in scoobie.
- Any custom tooling or setups, such as plugins, are highly likely to be broken. You may need to update and test.

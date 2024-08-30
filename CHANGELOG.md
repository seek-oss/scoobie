# scoobie

## 17.0.0

### Major Changes

- Replace Mermaid plugin to be backed by Playwright ([#689](https://github.com/seek-oss/scoobie/pull/689))

  Previously, the Mermaid plugin was backed by Puppeteer. This change replaces this via `mermaid-isomorphic`, in turn backed by Playwright.

  There are some consequences for Mermaid users:

  - Output changes (you should review and tweak these)
  - You'll no longer need to install puppeteer and manage it in e.g. your Dockerfiles
  - Before running builds with this change, you'll need to install `mermaid-isomorphic` (which is now a `scoobie` peer dependency), and `playwright` in order to run `<packageManager> playwright install chromium`. This could form a postinstall script.

## 16.0.0

### Major Changes

- Bump minimum supported version of sku to 13.0.0 ([#666](https://github.com/seek-oss/scoobie/pull/666))

- **deps:** webpack-merge ^6.0.0 ([#665](https://github.com/seek-oss/scoobie/pull/665))

  This release bumps the minimum supported Node version to `18.18`.

## 15.3.0

### Minor Changes

- Add components override to MdxProvider ([#617](https://github.com/seek-oss/scoobie/pull/617))

## 15.2.0

### Minor Changes

- **MdxProvider:** Set `Table`s to `overflowX="scroll" width="full"` ([#605](https://github.com/seek-oss/scoobie/pull/605))

### Patch Changes

- **Table:** Restore `type="stripe"` styling ([#605](https://github.com/seek-oss/scoobie/pull/605))

- **CodeBlock:** Restore `bash` and `shell` syntax highlighting ([#605](https://github.com/seek-oss/scoobie/pull/605))

- **mermaid:** Colour flowchart circle nodes ([#605](https://github.com/seek-oss/scoobie/pull/605))

## 15.1.0

### Minor Changes

- **Table:** Add `overflowX` and `whiteSpace` props ([#603](https://github.com/seek-oss/scoobie/pull/603))

  These allow you to control overflow and wrapping behaviour when width is constrained.

  ```tsx
  <>
    <Table />

    <Table overflowX="scroll" />

    <Table overflowX="scroll" whiteSpace="nowrap" />
  </>
  ```

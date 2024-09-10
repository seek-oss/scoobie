# scoobie

## 17.1.5

### Patch Changes

- **mermaid:** Restore flowchart labels in Chrome ([#707](https://github.com/seek-oss/scoobie/pull/707))

  This fixes a regression in [v17.1.2](https://github.com/seek-oss/scoobie/releases/tag/v17.1.2) where cut-off labels had a scrollbar rendered over them in Chrome.

## 17.1.4

### Patch Changes

- **mermaid:** Outline edge labels instead of drawing a translucent background box ([#702](https://github.com/seek-oss/scoobie/pull/702))

## 17.1.3

### Patch Changes

- **mermaid:** Fix `ERR_REQUIRE_ESM` ([#700](https://github.com/seek-oss/scoobie/pull/700))

## 17.1.2

### Patch Changes

- **mermaid:** Fix flowchart labels being cut off ([#698](https://github.com/seek-oss/scoobie/pull/698))

## 17.1.1

### Patch Changes

- Lazy load mermaid-isomorphic to avoid import errors for non-mermaid projects ([#696](https://github.com/seek-oss/scoobie/pull/696))

## 17.1.0

### Minor Changes

- **CodeBlock:** Add `initialIndex` prop ([#690](https://github.com/seek-oss/scoobie/pull/690))

- **MdxProvider:** Add `default` code block directive ([#690](https://github.com/seek-oss/scoobie/pull/690))

  This supports use cases like providing successive GraphQL operation samples where argument differences are the focal point:

  ````markdown
  Permutation 1:

  ```graphql
  mutation ($input: Input!) {
    do(input: $input)
  }
  ```

  ```json default
  {
    "input": 1
  }
  ```

  Permutation 2:

  ```graphql
  mutation ($input: Input!) {
    do(input: $input)
  }
  ```

  ```json default
  {
    "input": 2
  }
  ```
  ````

- Add support for Mermaid overrides ([#693](https://github.com/seek-oss/scoobie/pull/693))

  Some Mermaid diagrams allow for YAML frontmatter. Scoobie has extended this by allowing a deep merge of the Mermaid configuration
  with a special `overrides` key in the frontmatter. This could be useful for diagram-specific configuration that is not otherwise easy to set.

  ````markdown
  ```mermaid
  ---
  overrides:
    gantt:
      useWidth: 500
  ---
  gantt
      title A Gantt Diagram
      dateFormat  YYYY-MM-DD
      section Section
      A task           :a1, 2014-01-01, 30d
  ```
  ````

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

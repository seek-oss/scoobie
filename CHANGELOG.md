# scoobie

## 19.0.0

### Major Changes

- **CodeBlock:** change props ([#770](https://github.com/seek-oss/scoobie/pull/770))

  - `label` and `language` are now required

  - `copy` is no longer accepted; the copy button is always shown

    To have just the code block without the top row with the copy button, use `CodeContainer`

  - `size` is no longer accepted; it is now hardcoded to `standard`

- **Blockquote:** drop `size` property; it is now hardcoded to `standard` ([#773](https://github.com/seek-oss/scoobie/pull/773))

- **Table, TableRow:** Remove components ([#768](https://github.com/seek-oss/scoobie/pull/768))

  [braid-design-system 33.3.0](https://github.com/seek-oss/braid-design-system/releases/tag/braid-design-system%4033.3.0) now supports `Table` components directly

### Minor Changes

- **CodeContainer:** add new component ([#770](https://github.com/seek-oss/scoobie/pull/770))

## 18.2.0

### Minor Changes

- **CodeBlock:** allow copy and labels to be optional ([#766](https://github.com/seek-oss/scoobie/pull/766))

## 18.1.2

### Patch Changes

- **deps:** prism-react-renderer ^2.4.1 ([#758](https://github.com/seek-oss/scoobie/pull/758))

## 18.1.1

### Patch Changes

- **deps:** remove unused dependency `remark-slug` ([#742](https://github.com/seek-oss/scoobie/pull/742))

## 18.1.0

### Minor Changes

- Tweak `img` style ([#737](https://github.com/seek-oss/scoobie/pull/737))

## 18.0.1

### Patch Changes

- **CodeBlock:** Enable `java` syntax highlighting ([#669](https://github.com/seek-oss/scoobie/pull/669))

## 18.0.0

### Major Changes

- Scoobie no longer supports MDX rendering, and so many pieces of this library have been removed. ([#732](https://github.com/seek-oss/scoobie/pull/732))

  Updating SEEK-internal codebases to use MDX v2/v3 has turned out to be challenging, and made even more challenging with the abstraction of having to do it via Scoobie.

  This change returns Scoobie to be a React component library only.

## 17.2.2

### Patch Changes

- **CodeBlock:** Update GraphQL playground links to work with multiple variables combinations ([#729](https://github.com/seek-oss/scoobie/pull/729))

## 17.2.1

### Patch Changes

- **mermaid:** Handle optional `tspan`s in sequence diagrams ([#724](https://github.com/seek-oss/scoobie/pull/724))

## 17.2.0

### Minor Changes

- **mermaid:** Revise diagram styling ([#715](https://github.com/seek-oss/scoobie/pull/715))

  This is a broad design pass of our stylesheet as it pertains to diagrams currently available on `developer.seek.com`. More lines and text are now coloured correctly, and text shadows are more widely employed to improve readability on different backgrounds.

## 17.1.7

### Patch Changes

- **mermaid:** Fix flowchart labels being cut off in Chrome ([#712](https://github.com/seek-oss/scoobie/pull/712))

## 17.1.6

### Patch Changes

- **mermaid:** Fix text rendering of edge labels ([#710](https://github.com/seek-oss/scoobie/pull/710))

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

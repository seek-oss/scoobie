# scoobie

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

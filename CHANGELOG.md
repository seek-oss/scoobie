# scoobie

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

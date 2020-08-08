# 🧶 Scoobie

[![GitHub Release](https://github.com/seek-oss/scoobie/workflows/Release/badge.svg?branch=master)](https://github.com/seek-oss/scoobie/actions?query=workflow%3ARelease)
[![GitHub Validate](https://github.com/seek-oss/scoobie/workflows/Validate/badge.svg?branch=master)](https://github.com/seek-oss/scoobie/actions?query=workflow%3AValidate)
[![npm package](https://img.shields.io/npm/v/scoobie)](https://www.npmjs.com/package/scoobie)

Component library for SEEK documentation sites.

- Author content in [Markdown] files
- Render content with [Braid] styling
- Integrate with [sku]

We use this to build [developer.seek.com](https://developer.seek.com), among other things.

[braid]: https://github.com/seek-oss/braid-design-system
[markdown]: https://en.wikipedia.org/wiki/Markdown
[react]: https://reactjs.org/
[sku]: https://github.com/seek-oss/sku

```shell
yarn add --exact scoobie
```

## Table of contents

- [Setup](#setup)
- [Markdown reference](#markdown-reference)
  - [Getting started](#getting-started)
  - [Headings](#headings)
  - [Images](#images)
  - [Links](#links)
  - [Tables](#tables)
- [React API reference](#react-api-reference)
  - [CodeBlock](#codeblock)
  - [InlineCode](#inlinecode)
  - [InternalLink](#internallink)
  - [ListItem](#listitem)
  - [MdxProvider](#mdxprovider)
  - [OrderedList](#orderedlist)
  - [SmartTextLink](#smarttextlink)
  - [Table](#table)
  - [TableRow](#tablerow)
  - [TocRenderer](#tocrenderer)
  - [UnorderedList](#unorderedlist)
  - [WrapperRenderer](#wrapperrenderer)
  - [useImageStyles](#useimagestyles)
- [Contributing](https://github.com/seek-oss/scoobie/blob/master/CONTRIBUTING.md)

## Setup

### `sku.config.js`

Compile Scoobie and bundle your Markdown content with its [Webpack loaders]:

[webpack loaders]: https://webpack.js.org/loaders/

```javascript
const { dangerouslySetWebpackConfig } = require('scoobie/webpack');

module.exports = {
  // ...

  compilePackages: ['scoobie'],
  dangerouslySetWebpackConfig,
};
```

### `src/render.tsx`

Fetch our favourite fonts from our Google overlords, Roboto and Roboto Mono:

```typescript
import { robotoHtml, robotoMonoHtml } from 'scoobie/typography';

const skuRender: Render<RenderContext> = {
  renderDocument: ({ app, bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <!-- ... -->
        ${robotoHtml}
        ${robotoMonoHtml}
        <!-- ... -->
  `,
};
```

### `src/scoobie.d.ts`

Import TypeScript definitions for `MDX`, `*.md` and `*.mdx`:

```ts
import 'scoobie/types';
```

## Markdown reference

### Getting started

Scoobie’s Markdown support is powered by [MDX] and custom [Remark plugins].

[mdx]: https://mdxjs.com/
[remark plugins]: https://github.com/remarkjs/remark/blob/master/doc/plugins.md

Create your content in `.md` or `.mdx` files:

```markdown
# A normal Markdown heading

Some text...

import { Alert, Text } from 'braid-design-system';

<Alert tone="critical"><Text>And a React component!</Text></Alert>
```

Import your content into a typical `.tsx` file:

```tsx
import React from 'react';

import Content from './Content.mdx';

export const ContentWithPointlessDiv = () => (
  <div>
    <Content />
  </div>
);
```

Nest your Markdown components within an [MdxProvider](#mdxprovider):

```tsx
import 'braid-design-system/reset';

import { BraidLoadableProvider } from 'braid-design-system';
import React from 'react';
import { MdxProvider } from 'scoobie';

import { ContentWithPointlessDiv } from './SomeFile.tsx';

export const App = ({ site }: { site: string }) => (
  <BraidLoadableProvider themeName={site}>
    <MdxProvider>
      <ContentWithPointlessDiv />
    </MdxProvider>
  </BraidLoadableProvider>
);
```

(See [React context] to learn more about this pattern.)

[react context]: https://reactjs.org/docs/context.html#contextprovider

### Headings

Anchor slugs are automatically generated for h1–h6:

```markdown
# My Little Heading1

<!-- #my-little-heading1 -->
```

### Images

Vanilla Markdown image syntax is supported:

```markdown
![Boo raster](./image.png)

![Woo vector](./image.svg)
```

Define width and height px constraints by overloading the title of non-SVG images:

```markdown
![Alt text](./image.png '=100x20 Rest of title')
```

### Links

Use a root-relative path to navigate to a route managed by your React app.
This will be rendered as a React Router link and won't require a full page refresh.

Make sure to point to the route rather than the source file location:

```markdown
[👍 like this](/root/relative)

[👎 not this](/src/root/Relative.mdx)
```

Use a full URL to denote an external link.
This will open in a new tab.

```markdown
[Schema reference](https://developer.seek.com/schema)
```

### Tables

Standard Markdown table syntax is supported:

```markdown
| Default | Left | Centre | Right |
| ------- | :--- | :----: | ----: |
| x       | x    |   x    |     x |
```

Use raw HTML to render multiple lines and lists in table cells.

Care must be taken with `<p>`s; they are mapped to Braid `Text`s, which have strict semantics.
Paragraph tags must be placed around text content and cannot be nested within each other.

```markdown
| Description             | Example                                                            |
| :---------------------- | :----------------------------------------------------------------- |
| Single-line             | Line                                                               |
| Multi-line              | <p>Line 1</p><p>Line 2</p>                                         |
| Bullets                 | <ul><li><p>Bullet 1</p></li></ul>                                  |
| Multi-line with bullets | <p>Line before</p><ul><li><p>Bullet</p></li></ul><p>Line after</p> |
```

## React API reference

### CodeBlock

Render lines of code with [Prism] syntax highlighting.

[prism]: https://github.com/PrismJS/prism

```tsx
import React from 'react';
import { CodeBlock } from 'scoobie';

export const MyFirstCodeBlock = () => (
  <CodeBlock language="javascript">console.log('hello, world');</CodeBlock>
);
```

### InlineCode

Render code inline with text.

```tsx
import { Text } from 'braid-design-system';
import React from 'react';
import { InlineCode } from 'scoobie';

export const MyFirstInlineCode = () => (
  <Text>
    Some text with <InlineCode>InlineCode</InlineCode>!
  </Text>
);
```

### InternalLink

Render an internal link with the same opinions as our [MdxProvider](#mdxprovider):

- Internal links use client-side navigation with smooth scrolling via [react-router-hash-link],
  and pass through the `v` URL parameter for UI version switching

Unlike [SmartTextLink](#smarttextlink), this is not bound to a parent [Text] as it has no underlying [TextLinkRenderer].
It can be used to make complex components navigable rather than just sections of text.

[text]: https://seek-oss.github.io/braid-design-system/components/Text/
[textlinkrenderer]: https://seek-oss.github.io/braid-design-system/components/TextLinkRenderer/

```tsx
import { Stack, Text } from 'braid-design-system';
import React from 'react';
import { InternalLink } from 'scoobie';

export const SomeComplexLinkElement = () => (
  <InternalLink href="/page#id" reset>
    <Stack space="medium">
      <Text>InternalLink supports complex children.</Text>

      <Text size="small">It is not bound to a parent Text component.</Text>
    </Stack>
  </InternalLink>
);
```

### ListItem

Child `<li>` component for [OrderedList](#orderedlist) and [UnorderedList](#unorderedlist).

### MdxProvider

Provide a base collection of [Braid]-styled renderers for child MDX documents.

```tsx
import 'braid-design-system/reset';

import { BraidLoadableProvider, Card } from 'braid-design-system';
import React from 'react';
import { MdxProvider } from 'scoobie';

import Content from './Content.mdx';

export const App = ({ site }: { site: string }) => (
  <BraidLoadableProvider themeName={site}>
    <MdxProvider>
      <Card>
        <Content />
      </Card>
    </MdxProvider>
  </BraidLoadableProvider>
);
```

### OrderedList

Render a styled `<ol>` that supports nesting and rich content:

```tsx
import { Stack, Text } from 'braid-design-system';
import React from 'react';
import { ListItem, OrderedList } from 'scoobie';

export const List = () => (
  <OrderedList>
    <ListItem>
      <Stack space="medium">
        <Text>Level 1</Text>

        <OrderedList>
          <ListItem>
            <Text>Level 2</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </ListItem>
  </OrderedList>
);
```

### SmartTextLink

Render a text link with the same opinions as our [MdxProvider](#mdxprovider):

- Internal links use client-side navigation with smooth scrolling via [react-router-hash-link],
  and pass through the `v` URL parameter for UI version switching
- External links open in a new tab and have an [IconNewWindow] suffix

[react-router-hash-link]: https://github.com/rafrex/react-router-hash-link
[iconnewwindow]: https://seek-oss.github.io/braid-design-system/components/IconNewWindow

```tsx
import { Stack, Text } from 'braid-design-system';
import React from 'react';
import { SmartTextLink } from 'scoobie';

export const SomeLinks = () => (
  <Text>
    <Stack space="medium">
      <SmartTextLink href="/page#id">Scrolls smoothly</SmartTextLink>

      <SmartTextLink href="https://developer.seek.com/schema">
        Opens in new tab
      </SmartTextLink>
    </Stack>
  </Text>
);
```

### Table

Render an HTML table with the same styling as our [MdxProvider](#mdxprovider):

```tsx
import React, { Fragment } from 'react';
import { Table, TableRow } from 'scoobie';

export const MyFirstTable = () => (
  <Table header={['Column A', 'Column B']}>
    <TableRow>
      <Fragment>This is body cell A1.</Fragment>
      <Fragment>B1</Fragment>
    </TableRow>

    <TableRow>
      <Fragment>A2</Fragment>
      <Fragment>This is body cell B2.</Fragment>
    </TableRow>
  </Table>
);
```

### TableRow

`<tr>` component for use with [Table](#table).

Row children are flattened then wrapped with `<td>`s.

### TocRenderer

Render headings from an MDX document with a custom function.

```tsx
import { Stack, TextLink } from 'braid-design-system';
import React from 'react';
import { TocRenderer } from 'scoobie';

import Content from './Content.mdx';

export const PageWithToc = () => (
  <Stack space="medium">
    <TocRenderer document={Content}>
      {(toc) => (
        <Text>
          <Stack space="small">
            {toc.map((item) => (
              <TextLink href={`#${item.id}`} key={item.id}>
                {'|'.repeat(item.level)} {item.children}
              </TextLink>
            ))}
          </Stack>
        </Text>
      )}
    </TocRenderer>

    <Content />
  </Stack>
);
```

A heading must start at the beginning of its line to be parsed:

```markdown
# Good

- ## Bad

  - ### Super bad

## Good again
```

(This can be enforced with [markdownlint]’s [MD023] rule.)

[markdownlint]: https://github.com/markdownlint/markdownlint
[md023]: https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md023---headers-must-start-at-the-beginning-of-the-line

### UnorderedList

Render a styled `<ul>` that supports nesting and rich content:

```tsx
import { Stack, Text } from 'braid-design-system';
import React from 'react';
import { ListItem, UnorderedList } from 'scoobie';

export const List = () => (
  <UnorderedList>
    <ListItem>
      <Stack space="medium">
        <Text>Level 1</Text>

        <UnorderedList>
          <ListItem>
            <Text>Level 2</Text>
          </ListItem>
        </UnorderedList>
      </Stack>
    </ListItem>
  </UnorderedList>
);
```

### WrapperRenderer

Render an MDX document with a [customised wrapper].

[customised wrapper]: https://mdxjs.com/guides/wrapper-customization

This allows you to derive arbitrary components from select parts of the document.

```typescript
import { Text } from 'braid-design-system';
import React from 'react';
import { WrapperRenderer } from 'scoobie';

export const NodeCount = (Document: MDX.Document) => (
  <WrapperRenderer document={Document}>
    {({ children }) => (
      <Text>{React.Children.toArray(children).length} top-level node(s)</Text>
    )}
  </WrapperRenderer>
);
```

### useImageStyles

Render an image with the same styling as our [MdxProvider](#mdxprovider):

```typescript
import React from 'react';
import { useImageStyles } from 'scoobie';

export const MySvg = () => {
  const styles = useImageStyles();

  return (
    <svg className={styles.svg}>
      <path />
    </svg>
  );
};
```

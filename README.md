# Scoobie

[![npm package](https://img.shields.io/badge/npm-scoobie-cc3534.svg)](https://www.npmjs.com/package/scoobie)
[![Slack channel](https://img.shields.io/badge/slack-%23indirect--apply-3f0f3f.svg)](https://slack.com/app_redirect?team=T02P37LGR&channel=indirect-apply)
[![GitHub repos](https://img.shields.io/badge/users-@SEEK--Jobs-0d3880.svg)](https://github.com/search?q=filename%3Apackage.json+org%3ASEEK-Jobs+scoobie&type=Code)
[![Upkeep](https://img.shields.io/badge/users-Upkeep-61d3b1.svg)](https://upkeep.ssod.skinfra.xyz/package#?name=scoobie)

Component library for SEEK documentation sites.

- Author content in [Markdown] files
- Render content with [Braid] styling
- Integrate with [sku]

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
- [React API reference](#react-api-reference)
  - [CodeBlock](#codeblock)
  - [MdxProvider](#mdxprovider)
  - [TocRenderer](#tocrenderer)
  - [WrapperRenderer](#wrapperrenderer)
- [Development](#development)

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

### `src/index.d.ts`

Import TypeScript definitions for `MDX`, `*.md` and `*.mdx`:

```ts
import 'scoobie/types';
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

export const MyFirstCode = () => (
  <CodeBlock language="javascript">console.log('hello, world');</CodeBlock>
);
```

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

## Development

### Prerequisites

- Node.js 12+
- Yarn 1.x

### Build

```shell
yarn build
```

Scoobie is published as TypeScript source code.

Consumers control the compilation; see [sku.config.js](#skuconfigjs).

### Lint

```shell
# fix
yarn format

# check
yarn lint
```

### Test

```shell
yarn test
```

### Storybook with Loki

```shell
# start Storybook server
yarn storybook

# update snapshots
yarn update:loki
```

# 🧶 Scoobie

[![GitHub Release](https://github.com/seek-oss/scoobie/workflows/Release/badge.svg?branch=master)](https://github.com/seek-oss/scoobie/actions?query=workflow%3ARelease)
[![GitHub Validate](https://github.com/seek-oss/scoobie/workflows/Validate/badge.svg?branch=master)](https://github.com/seek-oss/scoobie/actions?query=workflow%3AValidate)
[![npm package](https://img.shields.io/npm/v/scoobie)](https://www.npmjs.com/package/scoobie)

Component library for SEEK documentation sites.

We use this to build [developer.seek.com](https://developer.seek.com), among other things.

```shell
yarn add --exact scoobie
```

## Setup

### `sku.config.ts`

Compile Scoobie:

```javascript
module.exports = {
  // ...
  compilePackages: ['scoobie'],
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

If you manually manage the [Content Security Policy] of your site,
you can specify the following sources along with the script hashes from [typography.ts](typography.ts):

```http
Content-Security-Policy: font-src https://fonts.gstatic.com; script-src 'sha256-...' 'sha256-...'; style-src https://fonts.googleapis.com
```

[content security policy]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

## Components

### Blockquote

Renders rich quoted content.

```tsx
import { List, Text } from 'braid-design-system';
import React from 'react';
import { Blockquote } from 'scoobie';

export const MyFirstBlockquote = () => (
  <Blockquote>
    <Text>This is a paragraph.</Text>

    <List>
      <Text>This is a bullet point.</Text>
    </List>
  </Blockquote>
);
```

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

### CopyableText

Render a [Text] component that copies the `children` string to clipboard on click.

```tsx
import React from 'react';
import { CodeBlock } from 'scoobie';

export const MyFirstCopyableText = () => (
  <CopyableText>This gets copied to clipboard.</CopyableText>
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

Render an internal link. Internal links pass through the `v` or [ScoobieLinkProvider] URL parameters for UI version switching.

Unlike [SmartTextLink](#smarttextlink), this is not bound to a parent [Text] as it has no underlying [TextLink].
It can be used to make complex components navigable rather than just sections of text.

[scoobielinkprovider]: #scoobielinkprovider
[text]: https://seek-oss.github.io/braid-design-system/components/Text/
[textlink]: https://seek-oss.github.io/braid-design-system/components/TextLink/

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

### ScoobieLink

Render all underlying links as follows:

- Internal links pass through the `v` or [ScoobieLinkProvider] URL parameters for UI version switching
- External links open in a new tab
- Links with a [`download` attribute] prompt the user with a file download

[`download` attribute]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download

This should be supplied to [BraidProvider] as the custom `linkComponent`:

```tsx
import { BraidProvider, TextLink } from 'braid-design-system';
import apacTheme from 'braid-design-system/themes/apac';
import React from 'react';
import { ScoobieLink } from 'scoobie';

export const Component = () => (
  <BraidProvider linkComponent={ScoobieLink} theme={apacTheme}>
    <TextLink href="/root-relative">Internal link</TextLink>
  </BraidProvider>
);
```

[braidprovider]: https://seek-oss.github.io/braid-design-system/components/BraidProvider

### ScoobieLinkProvider

Propagate a custom set of URL parameters on internal links.

```tsx
import { BraidProvider, TextLink } from 'braid-design-system';
import apacTheme from 'braid-design-system/themes/apac';
import React from 'react';
import { ScoobieLink } from 'scoobie';

export const Component = () => (
  <ScoobieLinkProvider propagateSearchParams={['debug', 'v']}>
    <BraidProvider linkComponent={ScoobieLink} theme={apacTheme}>
      <TextLink href="/root-relative">Internal link</TextLink>
    </BraidProvider>
  </ScoobieLinkProvider>
);
```

### SmartTextLink

Render a text link. External links open in a new tab and have an [IconNewWindow] suffix

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

## Styling reference

Scoobie distributes some vanilla-extract styles via `scoobie/styles` submodules.

### code

Render text with the same monospace styling as our [CodeBlock](#codeblock):

```tsx
import { Box } from 'braid-design-system';
import React from 'react';
import { code } from 'scoobie/styles/code.css';

export const MyBox = () => (
  <Box className={code.standard}>
    <Box component="pre">Hello</Box>
  </Box>
);
```

### img

```tsx
import React from 'react';
import { img } from 'scoobie/styles/img.css';

export const MySvg = () => (
  <svg className={img}>
    <path />
  </svg>
);
```

## Webpack reference

Scoobie distributes its Webpack config via a `scoobie/webpack` submodule:

```typescript
const { ScoobieWebpackPlugin } = require('scoobie/webpack');
```

Compatibility notes:

- SVGs cannot be directly imported into JSX as components.

  Consider inlining the SVGs in your JSX instead.

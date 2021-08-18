import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import BlockquoteMarkdown from '../storybook/markdown/blockquote.mdx';
import Code from '../storybook/markdown/code.mdx';
import Combination from '../storybook/markdown/combination.mdx';
import Headings from '../storybook/markdown/headings.mdx';
import ImagesExternal from '../storybook/markdown/images-external.mdx';
import ImagesInternal from '../storybook/markdown/images-internal.mdx';
import Inline from '../storybook/markdown/inline.mdx';
import Lists from '../storybook/markdown/lists.mdx';
import TableMarkdown from '../storybook/markdown/table.mdx';

storiesOf('MdxProvider', module)
  .addDecorator(withDecorator)
  .add('Blockquote', () => <BlockquoteMarkdown />)
  .add('Code', () => <Code />)
  .add('Combination', () => <Combination />)
  .add('Headings', () => <Headings />)
  .add('ImagesExternal', () => <ImagesExternal />, { loki: { skip: true } })
  .add('ImagesInternal', () => <ImagesInternal />)
  .add('Inline', () => <Inline />)
  .add('Lists', () => <Lists />)
  .add('Table', () => <TableMarkdown />);

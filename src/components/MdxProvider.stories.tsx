import '../storybook/register';

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
import { StorybookProvider } from '../storybook/provider';

storiesOf('MdxProvider', module)
  .add('Blockquote', () => (
    <StorybookProvider>
      <BlockquoteMarkdown />
    </StorybookProvider>
  ))
  .add('Code', () => (
    <StorybookProvider>
      <Code />
    </StorybookProvider>
  ))
  .add('Combination', () => (
    <StorybookProvider>
      <Combination />
    </StorybookProvider>
  ))
  .add('Headings', () => (
    <StorybookProvider>
      <Headings />
    </StorybookProvider>
  ))
  .add(
    'ImagesExternal',
    () => (
      <StorybookProvider>
        {' '}
        <ImagesExternal />
      </StorybookProvider>
    ),
    { loki: { skip: true } },
  )
  .add('ImagesInternal', () => (
    <StorybookProvider>
      <ImagesInternal />
    </StorybookProvider>
  ))
  .add('Inline', () => (
    <StorybookProvider>
      <Inline />
    </StorybookProvider>
  ))
  .add('Lists', () => (
    <StorybookProvider>
      <Lists />
    </StorybookProvider>
  ))
  .add('Table', () => (
    <StorybookProvider>
      <TableMarkdown />
    </StorybookProvider>
  ))
  .addDecorator(withDecorator);

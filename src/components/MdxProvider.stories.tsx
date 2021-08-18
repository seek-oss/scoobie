import '../storybook/register';

import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import BlockquoteMarkdown from '../storybook/markdown/blockquote.mdx';
import Code from '../storybook/markdown/code.mdx';
import Combination from '../storybook/markdown/combination.mdx';
import Headings from '../storybook/markdown/headings.mdx';
import ImagesExternal from '../storybook/markdown/images-external.mdx';
import ImagesInternal from '../storybook/markdown/images-internal.mdx';
import Inline from '../storybook/markdown/inline.mdx';
import Lists from '../storybook/markdown/lists.mdx';
import TableMarkdown from '../storybook/markdown/table.mdx';
import { BraidStorybookProvider, withProviders } from '../storybook/provider';

storiesOf('MdxProvider', module)
  .add('Blockquote', () => (
    <BraidStorybookProvider>
      <BlockquoteMarkdown />
    </BraidStorybookProvider>
  ))
  .add('Code', () => (
    <BraidStorybookProvider>
      <Code />
    </BraidStorybookProvider>
  ))
  .add('Combination', () => (
    <BraidStorybookProvider>
      <Combination />
    </BraidStorybookProvider>
  ))
  .add('Headings', () => (
    <BraidStorybookProvider>
      <Headings />
    </BraidStorybookProvider>
  ))
  .add(
    'ImagesExternal',
    () => (
      <BraidStorybookProvider>
        {' '}
        <ImagesExternal />
      </BraidStorybookProvider>
    ),
    { loki: { skip: true } },
  )
  .add('ImagesInternal', () => (
    <BraidStorybookProvider>
      <ImagesInternal />
    </BraidStorybookProvider>
  ))
  .add('Inline', () => (
    <BraidStorybookProvider>
      <Inline />
    </BraidStorybookProvider>
  ))
  .add('Lists', () => (
    <BraidStorybookProvider>
      <Lists />
    </BraidStorybookProvider>
  ))
  .add('Table', () => (
    <BraidStorybookProvider>
      <TableMarkdown />
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);

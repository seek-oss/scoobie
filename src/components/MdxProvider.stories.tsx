import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';
import BlockquoteMarkdown from '../storybook/markdown/blockquote.mdx';
import CodeMarkdown from '../storybook/markdown/code.mdx';
import CombinationMarkdown from '../storybook/markdown/combination.mdx';
import HeadingsMarkdown from '../storybook/markdown/headings.mdx';
import ImagesExternalMarkdown from '../storybook/markdown/images-external.mdx';
import ImagesInternalMarkdown from '../storybook/markdown/images-internal.mdx';
import InlineMarkdown from '../storybook/markdown/inline.mdx';
import ListsMarkdown from '../storybook/markdown/lists.mdx';
import TableMarkdown from '../storybook/markdown/table.mdx';

export default {
  decorators: [ScoobieDecorator],
  title: 'MdxProvider',
};

export const Blockquote = () => <BlockquoteMarkdown />;

export const Code = () => <CodeMarkdown />;

export const Combination = () => <CombinationMarkdown />;

export const Headings = () => <HeadingsMarkdown />;

export const ImagesExternal = () => <ImagesExternalMarkdown />;
ImagesExternal.parameters = { loki: { skip: true } };

export const ImagesInternal = () => <ImagesInternalMarkdown />;

export const Inline = () => <InlineMarkdown />;

export const Lists = () => <ListsMarkdown />;

export const Table = () => <TableMarkdown />;

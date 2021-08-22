import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';
import { ReactNode } from 'react';

import {
  BraidArgs,
  MdxArgs,
  defaultArgTypes,
  defaultArgs,
} from '../storybook/controls';
import {
  BraidStorybookProvider,
  MdxStorybookProvider,
  withRouter,
} from '../storybook/decorators';
import BlockquoteMarkdown from '../storybook/markdown/blockquote.mdx';
import CodeMarkdown from '../storybook/markdown/code.mdx';
import CombinationMarkdown from '../storybook/markdown/combination.mdx';
import HeadingsMarkdown from '../storybook/markdown/headings.mdx';
import ImagesExternalMarkdown from '../storybook/markdown/images-external.mdx';
import ImagesInternalMarkdown from '../storybook/markdown/images-internal.mdx';
import InlineMarkdown from '../storybook/markdown/inline.mdx';
import ListsMarkdown from '../storybook/markdown/lists.mdx';
import MermaidErMarkdown from '../storybook/markdown/mermaid-er.mdx';
import MermaidFlowchartMarkdown from '../storybook/markdown/mermaid-flowchart.mdx';
import MermaidSequenceMarkdown from '../storybook/markdown/mermaid-sequence.mdx';
import TableMarkdown from '../storybook/markdown/table.mdx';

import { MdxProvider } from './MdxProvider';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    mdxSize: defaultArgs.mdxSize,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    mdxSize: defaultArgTypes.mdxSize,
  },
  component: MdxProvider,
  decorators: [withRouter],
  title: 'MDX/MdxProvider',
};

type Args = { children: ReactNode } & BraidArgs & MdxArgs;

const Provider = ({ braidThemeName, children, mdxSize }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <MdxStorybookProvider mdxSize={mdxSize}>{children}</MdxStorybookProvider>
  </BraidStorybookProvider>
);

export const Blockquote = (args: Args) => (
  <Provider {...args}>
    <BlockquoteMarkdown />
  </Provider>
);

export const Code = (args: Args) => (
  <Provider {...args}>
    <CodeMarkdown />
  </Provider>
);

export const Combination = (args: Args) => (
  <Provider {...args}>
    <CombinationMarkdown />
  </Provider>
);

export const Headings = (args: Args) => (
  <Provider {...args}>
    <HeadingsMarkdown />
  </Provider>
);

export const ImagesExternal = (args: Args) => (
  <Provider {...args}>
    <ImagesExternalMarkdown />
  </Provider>
);
ImagesExternal.parameters = { loki: { skip: true } };
ImagesExternal.storyName = 'Images › External';

export const ImagesInternal = (args: Args) => (
  <Provider {...args}>
    <ImagesInternalMarkdown />
  </Provider>
);
ImagesInternal.storyName = 'Images › Internal';

export const Inline = (args: Args) => (
  <Provider {...args}>
    <InlineMarkdown />
  </Provider>
);

export const Lists = (args: Args) => (
  <Provider {...args}>
    <ListsMarkdown />
  </Provider>
);

export const MermaidEr = (args: Args) => (
  <Provider {...args}>
    <MermaidErMarkdown />
  </Provider>
);
MermaidEr.storyName = 'Mermaid › ER';

export const MermaidFlowchart = (args: Args) => (
  <Provider {...args}>
    <MermaidFlowchartMarkdown />
  </Provider>
);
MermaidFlowchart.storyName = 'Mermaid › Flowchart';

export const MermaidSequence = (args: Args) => (
  <Provider {...args}>
    <MermaidSequenceMarkdown />
  </Provider>
);
MermaidSequence.storyName = 'Mermaid › Sequence';

export const Table = (args: Args) => (
  <Provider {...args}>
    <TableMarkdown />
  </Provider>
);

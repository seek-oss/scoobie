import 'braid-design-system/reset';
import 'loki/configure-react';

import React, { type ReactNode } from 'react';

import {
  type BraidArgs,
  type MdxArgs,
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
import HeadingMarkdown from '../storybook/markdown/heading.mdx';
import ImageExternalMarkdown from '../storybook/markdown/image-external.mdx';
import ImageInternalMarkdown from '../storybook/markdown/image-internal.mdx';
import InlineReactMarkdown from '../storybook/markdown/inline-react.mdx';
import ListMarkdown from '../storybook/markdown/list.mdx';
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

export const Heading = (args: Args) => (
  <Provider {...args}>
    <HeadingMarkdown />
  </Provider>
);

export const ImageExternal = (args: Args) => (
  <Provider {...args}>
    <ImageExternalMarkdown />
  </Provider>
);
ImageExternal.parameters = { loki: { skip: true } };
ImageExternal.storyName = 'Image › External';

export const ImageInternal = (args: Args) => (
  <Provider {...args}>
    <ImageInternalMarkdown />
  </Provider>
);
ImageInternal.storyName = 'Image › Internal';

export const InlineReact = (args: Args) => (
  <Provider {...args}>
    <InlineReactMarkdown />
  </Provider>
);

export const Lists = (args: Args) => (
  <Provider {...args}>
    <ListMarkdown />
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

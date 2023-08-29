import 'loki/configure-react';

import type { MDXProvider } from '@mdx-js/react';
import type { ReactNode } from 'react';
import type { Meta, StoryObj } from 'sku/@storybook/react';

import { SIZES } from '../private/size';
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

import { MdxProvider as Component } from './MdxProvider';

export default {
  title: 'MDX/MdxProvider',
  component: Component,
  args: {
    size: 'standard',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      name: 'MDX size',
      options: SIZES,
    },
  },
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof MDXProvider & { children: ReactNode }>;

export const Blockquote: Story = {
  args: {
    children: <BlockquoteMarkdown />,
  },
};

export const Code: Story = {
  args: {
    children: <CodeMarkdown />,
  },
};

export const Heading: Story = {
  args: {
    children: <HeadingMarkdown />,
  },
};

export const ImageExternal: Story = {
  args: {
    children: <ImageExternalMarkdown />,
  },
  parameters: { loki: { skip: true } },
  name: 'Image › External',
};

export const ImageInternal: Story = {
  args: {
    children: <ImageInternalMarkdown />,
  },
  parameters: { loki: { skip: true } },
  name: 'Image › Internal',
};

export const InlineReact: Story = {
  args: {
    children: <InlineReactMarkdown />,
  },
};

export const Lists: Story = {
  args: {
    children: <ListMarkdown />,
  },
};

export const MermaidEr: Story = {
  args: {
    children: <MermaidErMarkdown />,
  },
  name: 'Mermaid › ER',
};

export const MermaidFlowchart: Story = {
  args: {
    children: <MermaidFlowchartMarkdown />,
  },
  name: 'Mermaid › Flowchart',
};

export const MermaidSequence: Story = {
  args: {
    children: <MermaidSequenceMarkdown />,
  },
  name: 'Mermaid › Sequence',
};

export const Table: Story = {
  args: {
    children: <TableMarkdown />,
  },
};

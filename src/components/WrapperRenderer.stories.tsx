import 'loki/configure-react';
import { Text } from 'braid-design-system';
import React, { Children } from 'react';
import type { Meta, StoryObj } from 'sku/@storybook/react';

import Wrapper from '../storybook/markdown/wrapper.mdx';

import { WrapperRenderer as Component } from './WrapperRenderer';

export default {
  title: 'MDX/WrapperRenderer',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;
export const WrapperRenderer: Story = {
  args: {
    document: Wrapper,
    children: ({ children }) => (
      <Text>{Children.toArray(children).length} top-level node(s)</Text>
    ),
  },
};

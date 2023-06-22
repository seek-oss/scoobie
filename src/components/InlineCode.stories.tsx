import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';
import type { StoryObj } from 'sku/@storybook/react';

import { InlineCode } from './InlineCode';

const Component = ({ ...args }: ComponentProps<typeof InlineCode>) => (
  <Text>
    Some text with <InlineCode {...args} />!
  </Text>
);

export default {
  title: 'Standalone/InlineCode',
  component: Component,
};

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: 'inline code',
    weight: 'regular',
  },
  name: 'InlineCode',
};

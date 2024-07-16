import 'loki/configure-react';

import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';

import { InlineCode as InlineCodeComponent } from './InlineCode';

const Component = ({ ...args }: ComponentProps<typeof InlineCodeComponent>) => (
  <Text>
    Some text with <InlineCodeComponent {...args} />!
  </Text>
);

export default {
  title: 'Standalone/InlineCode',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const InlineCode: Story = {
  args: {
    children: 'inline code',
    weight: 'regular',
  },
};

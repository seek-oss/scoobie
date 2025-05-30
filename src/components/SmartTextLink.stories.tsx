import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';

import { SmartTextLink as SmartTextLinkComponent } from './SmartTextLink';

const Component = (args: ComponentProps<typeof SmartTextLinkComponent>) => (
  <Text>
    <SmartTextLinkComponent {...args} />
  </Text>
);

export default {
  title: 'Standalone/SmartTextLink',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const SmartTextLink: Story = {
  args: {
    children: 'SEEK Schema',
    href: 'https://developer.seek.com/schema',
  },
};

import 'braid-design-system/reset';
import 'loki/configure-react';
import { Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';
import type { StoryObj } from 'sku/@storybook/react';

import { SmartTextLink } from './SmartTextLink';

const Component = (args: ComponentProps<typeof SmartTextLink>) => (
  <Text>
    <SmartTextLink {...args} />
  </Text>
);

export default {
  title: 'Standalone/SmartTextLink',
  component: Component,
};

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    children: 'SEEK Schema',
    href: 'https://developer.seek.com/schema',
  },
  name: 'SmartTextLink',
};

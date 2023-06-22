import 'loki/configure-react';

import { List, Text } from 'braid-design-system';
import React from 'react';
import type { StoryObj } from 'sku/@storybook/react';

import { Blockquote as Component } from './Blockquote';

export default {
  title: 'Standalone/Blockquote',
  component: Component,
};

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    size: 'standard',
    children: (
      <>
        <Text size={'standard'}>This is a paragraph.</Text>
        <List size={'standard'}>
          <Text size={'standard'}>This is a bullet point.</Text>
        </List>
      </>
    ),
  },
  name: 'Blockquote',
};

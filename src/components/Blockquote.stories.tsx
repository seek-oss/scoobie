
import type { Meta, StoryObj } from '@storybook/react';
import { List, Text } from 'braid-design-system';
import React from 'react';

import { Blockquote as Component } from './Blockquote';

export default {
  title: 'Standalone/Blockquote',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Blockquote: Story = {
  args: {
    children: (
      <>
        <Text size="standard">This is a paragraph.</Text>
        <List size="standard">
          <Text size="standard">This is a bullet point.</Text>
        </List>
      </>
    ),
  },
};

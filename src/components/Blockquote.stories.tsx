import 'braid-design-system/reset';
import 'loki/configure-react';

import { List, Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { argTypes } from '../storybook/controls';
import { DesignDecorator } from '../storybook/decorators';

import { Blockquote } from './Blockquote';

export default {
  argTypes: {
    size: argTypes.size,
  },
  component: Blockquote,
  decorators: [DesignDecorator],
  title: 'Blockquote',
};

type Args = ComponentProps<typeof Blockquote>;

export const Custom = ({ size, ...args }: Args) => (
  <Blockquote {...args} size={size}>
    <Text size={size}>This is a paragraph.</Text>

    <List size={size}>
      <Text size={size}>This is a bullet point.</Text>
    </List>
  </Blockquote>
);

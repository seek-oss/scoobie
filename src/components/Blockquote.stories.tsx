import 'braid-design-system/reset';
import 'loki/configure-react';

import { List, Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { defaultArgTypes, defaultArgs } from '../storybook/controls';
import { DesignDecorator } from '../storybook/decorators';

import { Blockquote as Component } from './Blockquote';

export default {
  args: {
    size: defaultArgs.size,
  },
  argTypes: {
    size: defaultArgTypes.size,
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Standalone/Blockquote',
};

type Args = ComponentProps<typeof Component>;

export const Blockquote = ({ size, ...args }: Args) => (
  <Component {...args} size={size}>
    <Text size={size}>This is a paragraph.</Text>

    <List size={size}>
      <Text size={size}>This is a bullet point.</Text>
    </List>
  </Component>
);

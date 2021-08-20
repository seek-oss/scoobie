import 'braid-design-system/reset';
import 'loki/configure-react';

import { List, Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { Blockquote as Component } from './Blockquote';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    size: defaultArgs.size,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    size: defaultArgTypes.size,
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/Blockquote',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const Blockquote = ({ braidThemeName, size, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} size={size}>
      <Text size={size}>This is a paragraph.</Text>

      <List size={size}>
        <Text size={size}>This is a bullet point.</Text>
      </List>
    </Component>
  </BraidStorybookProvider>
);

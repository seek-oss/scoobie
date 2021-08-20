import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { InlineCode as Component } from './InlineCode';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    children: 'inline code',
    weight: 'regular',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    children: { control: { type: 'text' } },
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/InlineCode',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const InlineCode = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Text>
      Some text with <Component {...args} />!
    </Text>
  </BraidStorybookProvider>
);
InlineCode.storyName = 'InlineCode';

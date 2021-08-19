import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { DesignDecorator } from '../storybook/decorators';

import { InlineCode as Component } from './InlineCode';

export default {
  args: {
    children: 'inline code',
    weight: 'regular',
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Standalone/InlineCode',
};

type Args = ComponentProps<typeof Component>;

export const InlineCode = (args: Args) => (
  <Text>
    Some text with <Component {...args} />!
  </Text>
);
InlineCode.storyName = 'InlineCode';

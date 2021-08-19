import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { ComponentProps } from 'react';

import { DesignDecorator } from '../storybook/decorators';

import { SmartTextLink as Component } from './SmartTextLink';

export default {
  args: {
    children: 'SEEK Schema',
    href: 'https://developer.seek.com/schema',
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Standalone/SmartTextLink',
};

type Args = ComponentProps<typeof Component>;

export const SmartTextLink = (args: Args) => (
  <Text>
    <Component {...args} />
  </Text>
);
SmartTextLink.storyName = 'SmartTextLink';

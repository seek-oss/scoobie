import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { ComponentProps } from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { SmartTextLink } from './SmartTextLink';

export default {
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'SEEK Schema',
    },
    href: {
      defaultValue: 'https://developer.seek.com/schema',
    },
  },
  component: SmartTextLink,
  decorators: [ScoobieDecorator],
  title: 'SmartTextLink',
};

type Args = ComponentProps<typeof SmartTextLink>;

export const Custom = (args: Args) => (
  <Text>
    <SmartTextLink {...args} />
  </Text>
);

import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { InlineCode } from './InlineCode';

export default {
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'SEEK Schema',
    },
    weight: {
      defaultValue: 'regular',
    },
  },
  component: InlineCode,
  decorators: [ScoobieDecorator],
  title: 'InlineCode',
};

type Args = ComponentProps<typeof InlineCode>;

export const Custom = (args: Args) => (
  <Text>
    Some text with <InlineCode {...args} />!
  </Text>
);

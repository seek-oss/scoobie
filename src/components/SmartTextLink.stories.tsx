import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { ComponentProps } from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { SmartTextLink as Component } from './SmartTextLink';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    children: 'SEEK Schema',
    href: 'https://developer.seek.com/schema',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    children: { control: { type: 'text' } },
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/SmartTextLink',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const SmartTextLink = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Text>
      <Component {...args} />
    </Text>
  </BraidStorybookProvider>
);
SmartTextLink.storyName = 'SmartTextLink';

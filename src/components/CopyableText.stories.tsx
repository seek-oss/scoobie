import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';
import { ComponentProps } from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { CopyableText as Component } from './CopyableText';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    children: 'copy me',
    copiedIcon: 'undefined',
    copiedLabel: 'undefined',
    copyIcon: 'undefined',
    copyLabel: 'undefined',
    size: 'standard',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    children: { control: { type: 'text' } },
    copiedIcon: {
      control: { type: 'radio' },
      mapping: { undefined, false: false },
      options: ['undefined', 'false'],
    },
    copiedLabel: {
      control: { type: 'radio' },
      mapping: { undefined, custom: 'Custom copied label' },
      options: ['undefined', 'custom'],
    },
    copyIcon: {
      control: { type: 'radio' },
      mapping: { undefined, false: false },
      options: ['undefined', 'false'],
    },
    copyLabel: {
      control: { type: 'radio' },
      mapping: { undefined, custom: 'Custom copy label' },
      options: ['undefined', 'custom'],
    },
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/CopyableText',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const CopyableText = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
CopyableText.storyName = 'CopyableText';

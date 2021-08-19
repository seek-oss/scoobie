import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';
import { ComponentProps } from 'react';

import { withBraidProvider } from '../storybook/decorators';

import { CopyableText as Component } from './CopyableText';

export default {
  args: {
    children: 'copy me',
    copiedLabel: 'undefined',
    copyLabel: 'undefined',
    size: 'standard',
  },
  argTypes: {
    children: { control: { type: 'text' } },
    copiedLabel: {
      control: { type: 'radio' },
      mapping: { undefined, custom: 'Custom copied label' },
      options: ['undefined', 'custom'],
    },
    copyLabel: {
      control: { type: 'radio' },
      mapping: { undefined, custom: 'Custom copy label' },
      options: ['undefined', 'custom'],
    },
  },
  component: Component,
  decorators: [withBraidProvider],
  title: 'Standalone/CopyableText',
};

type Args = ComponentProps<typeof Component>;

export const CopyableText = (args: Args) => <Component {...args} />;
CopyableText.storyName = 'CopyableText';

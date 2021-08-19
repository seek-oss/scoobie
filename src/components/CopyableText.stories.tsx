import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';
import { ComponentProps } from 'react';

import { DesignDecorator } from '../storybook/decorators';

import { CopyableText } from './CopyableText';

export default {
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'copy me',
    },
    copiedLabel: {
      control: { options: ['undefined', 'custom'], type: 'radio' },
      defaultValue: 'undefined',
    },
    copyLabel: {
      control: { options: ['undefined', 'custom'], type: 'radio' },
      defaultValue: 'undefined',
    },
    size: {
      defaultValue: 'standard',
    },
  },
  component: CopyableText,
  decorators: [DesignDecorator],
  title: 'CopyableText',
};

interface Args extends ComponentProps<typeof CopyableText> {
  copiedLabel: 'undefined' | 'custom';
  copyLabel: 'undefined' | 'custom';
}

export const Custom = ({ copiedLabel, copyLabel, ...args }: Args) => (
  <CopyableText
    {...args}
    copiedLabel={
      copiedLabel === 'undefined' ? undefined : 'Custom copied label'
    }
    copyLabel={copyLabel === 'undefined' ? undefined : 'Custom copy label'}
  />
);

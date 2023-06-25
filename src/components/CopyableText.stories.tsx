import 'loki/configure-react';

import type { Meta, StoryObj } from 'sku/@storybook/react';

import { CopyableText as Component } from './CopyableText';

export default {
  title: 'Standalone/CopyableText',
  component: Component,
  argTypes: {
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
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const CopyableText: Story = {
  args: {
    children: 'copy me',
    copiedIcon: undefined,
    copiedLabel: undefined,
    copyIcon: undefined,
    copyLabel: undefined,
    size: 'standard',
  },
};

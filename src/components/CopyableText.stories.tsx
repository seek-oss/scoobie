
import type { Meta, StoryObj } from '@storybook/react';

import { CopyableText as Component } from './CopyableText';

export default {
  title: 'Standalone/CopyableText',
  component: Component,
  argTypes: {
    children: { control: { type: 'text' } },
    copiedIcon: {
      control: { type: 'radio' },
      options: [undefined, false],
    },
    copiedLabel: {
      control: { type: 'radio' },
      options: [undefined, 'Custom copied label'],
    },
    copyIcon: {
      control: { type: 'radio' },
      options: [undefined, false],
    },
    copyLabel: {
      control: { type: 'radio' },
      options: [undefined, 'Custom copy label'],
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


import type { Meta, StoryObj } from '@storybook/react';

import { CodeContainer as Component } from './CodeContainer';

export default {
  title: 'Standalone/CodeContainer',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const NoLineNumbers: Story = {
  args: {
    code: 'query {\n  version\n}',
    language: 'graphql',
  },
};

export const LineNumbers: Story = {
  args: {
    code: 'query {\n  version\n}',
    language: 'graphql',
    lineNumbers: true,
  },
};

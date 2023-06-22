import 'loki/configure-react';

import type { StoryObj } from 'sku/@storybook/react';

import { CodeBlock as Component } from './CodeBlock';

export default {
  title: 'Standalone/CodeBlock',
  component: Component,
  args: {
    graphqlPlayground: 'https://manage.developer.seek.com/graphql-explorer',
    language: 'graphql',
    size: 'standard',
    trim: true,
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['standard', 'large'],
    },
  },
};

type Story = StoryObj<typeof Component>;

export const Single: Story = {
  args: {
    children: 'query {\n  version\n}\n',
  },
};

export const Multi: Story = {
  args: {
    children: [
      {
        code: 'query {\n  version\n}\n',
        label: 'Operation',
        language: 'graphql',
      },
      {
        code: '{}',
        label: 'Variables',
        language: 'jsonc',
      },
      {
        code: '{\n  "data": null\n}\n',
        label: 'Response',
        language: 'jsonc',
      },
    ],
  },
  parameters: {
    docs: {
      source: {
        /**
         * Storybook mangles the children array without this.
         *
         * ```text
         * Objects are not valid as a React child (found: object with keys {code, label, language}).
         * If you meant to render a collection of children, use an array instead.
         * ```
         *
         * {@link https://github.com/storybookjs/storybook/issues/11543#issuecomment-684130442}
         */
        type: 'code',
      },
    },
  },
};

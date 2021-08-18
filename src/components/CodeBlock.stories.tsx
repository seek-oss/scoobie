import 'braid-design-system/reset';
import 'loki/configure-react';

import React, { ComponentProps } from 'react';

import { argTypes } from '../storybook/controls';
import { ScoobieDecorator } from '../storybook/decorator';

import { CodeBlock } from './CodeBlock';

export default {
  argTypes: {
    graphqlPlayground: {
      defaultValue: 'https://graphql.seek.com/graphql',
    },
    language: {
      defaultValue: 'graphql',
    },
    size: argTypes.size,
    trim: {
      defaultValue: true,
    },
  },
  component: CodeBlock,
  decorators: [ScoobieDecorator],
  title: 'CodeBlock',
};

type Args = ComponentProps<typeof CodeBlock>;

export const Single = (args: Args) => <CodeBlock {...args} />;
Single.argTypes = {
  children: {
    control: { type: 'text' },
    defaultValue: 'query {\n  version\n}\n',
  },
};

/**
 * `@storybook/addon-controls` mangles the children array if we specify `args`.
 *
 * ```text
 * Objects are not valid as a React child (found: object with keys {code, label, language}).
 * If you meant to render a collection of children, use an array instead.
 * ```
 */
export const Multi = () => (
  <CodeBlock>
    {[
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
    ]}
  </CodeBlock>
);
Multi.parameters = {
  controls: { hideNoControlsWarning: true },
};

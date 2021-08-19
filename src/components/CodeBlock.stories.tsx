import 'braid-design-system/reset';
import 'loki/configure-react';

import React, { ComponentProps } from 'react';

import { defaultArgTypes, defaultArgs } from '../storybook/controls';
import { DesignDecorator } from '../storybook/decorators';

import { CodeBlock as Component } from './CodeBlock';

export default {
  args: {
    graphqlPlayground: 'https://graphql.seek.com/graphql',
    language: 'graphql',
    size: defaultArgs.size,
    trim: true,
  },
  argTypes: {
    size: defaultArgTypes.size,
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Standalone/CodeBlock',
};

type Args = ComponentProps<typeof Component>;

export const Single = (args: Args) => <Component {...args} />;
Single.args = {
  children: 'query {\n  version\n}\n',
};
Single.argTypes = {
  children: { control: { type: 'text' } },
};

export const Multi = (args: Args) => (
  <Component {...args}>
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
  </Component>
);
Multi.parameters = {
  controls: { hideNoControlsWarning: true },
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
};

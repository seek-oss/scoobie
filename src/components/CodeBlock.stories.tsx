import 'braid-design-system/reset';
import 'loki/configure-react';

import React, { ComponentProps } from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { CodeBlock as Component } from './CodeBlock';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    graphqlPlayground: 'https://graphql.seek.com/graphql',
    language: 'graphql',
    size: defaultArgs.size,
    trim: true,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    size: defaultArgTypes.size,
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/CodeBlock',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

export const Single = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args} />
  </BraidStorybookProvider>
);
Single.args = {
  children: 'query {\n  version\n}\n',
};
Single.argTypes = {
  children: { control: { type: 'text' } },
};

export const Multi = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
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
  </BraidStorybookProvider>
);
Multi.parameters = {
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

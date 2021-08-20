import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { Children } from 'react';

import { BraidArgs, defaultArgTypes, defaultArgs } from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';
import Wrapper from '../storybook/markdown/wrapper.mdx';

import { WrapperRenderer as Component } from './WrapperRenderer';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    mdxSize: defaultArgs.mdxSize,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    mdxSize: defaultArgTypes.mdxSize,
  },
  component: Component,
  decorators: [withRouter],
  title: 'MDX/WrapperRenderer',
};

type Args = BraidArgs;

export const WrapperRenderer = ({ braidThemeName }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component document={Wrapper}>
      {({ children }) => (
        <Text>{Children.toArray(children).length} top-level node(s)</Text>
      )}
    </Component>
  </BraidStorybookProvider>
);
WrapperRenderer.storyName = 'WrapperRenderer';

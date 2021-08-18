import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';
import Wrapper from '../storybook/markdown/wrapper.mdx';

import { WrapperRenderer } from './WrapperRenderer';

export default {
  decorators: [ScoobieDecorator],
  title: 'WrapperRenderer',
};

export const Example = () => (
  <WrapperRenderer document={Wrapper}>
    {({ children }) => (
      <Text>{React.Children.toArray(children).length} top-level node(s)</Text>
    )}
  </WrapperRenderer>
);

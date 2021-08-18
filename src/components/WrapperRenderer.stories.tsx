import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { Children } from 'react';

import { ScoobieDecorator } from '../storybook/decorator';
import Wrapper from '../storybook/markdown/wrapper.mdx';

import { WrapperRenderer } from './WrapperRenderer';

export default {
  component: WrapperRenderer,
  decorators: [ScoobieDecorator],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  title: 'WrapperRenderer',
};

export const Example = () => (
  <WrapperRenderer document={Wrapper}>
    {({ children }) => (
      <Text>{Children.toArray(children).length} top-level node(s)</Text>
    )}
  </WrapperRenderer>
);
Example.parameters = {
  controls: { hideNoControlsWarning: true },
};

import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { Children } from 'react';

import { DesignDecorator } from '../storybook/decorators';
import Wrapper from '../storybook/markdown/wrapper.mdx';

import { WrapperRenderer as Component } from './WrapperRenderer';

export default {
  component: Component,
  decorators: [DesignDecorator],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  title: 'MDX/WrapperRenderer',
};

export const WrapperRenderer = () => (
  <Component document={Wrapper}>
    {({ children }) => (
      <Text>{Children.toArray(children).length} top-level node(s)</Text>
    )}
  </Component>
);
WrapperRenderer.storyName = 'WrapperRenderer';

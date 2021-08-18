import '../storybook/register';

import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import Wrapper from '../storybook/markdown/wrapper.mdx';
import { StorybookProvider } from '../storybook/provider';

import { WrapperRenderer } from './WrapperRenderer';

storiesOf('WrapperRenderer', module)
  .add('Example', () => (
    <StorybookProvider>
      <WrapperRenderer document={Wrapper}>
        {({ children }) => (
          <Text>
            {React.Children.toArray(children).length} top-level node(s)
          </Text>
        )}
      </WrapperRenderer>
    </StorybookProvider>
  ))
  .addDecorator(withDecorator);

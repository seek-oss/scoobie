import '../storybook/register';

import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import Wrapper from '../storybook/markdown/wrapper.mdx';
import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { WrapperRenderer } from './WrapperRenderer';

storiesOf('WrapperRenderer', module)
  .add('Example', () => (
    <BraidStorybookProvider>
      <WrapperRenderer document={Wrapper}>
        {({ children }) => (
          <Text>
            {React.Children.toArray(children).length} top-level node(s)
          </Text>
        )}
      </WrapperRenderer>
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);

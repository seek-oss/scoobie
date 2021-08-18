import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import Wrapper from '../storybook/markdown/wrapper.mdx';

import { WrapperRenderer } from './WrapperRenderer';

storiesOf('WrapperRenderer', module)
  .addDecorator(withDecorator)
  .add('Example', () => (
    <WrapperRenderer document={Wrapper}>
      {({ children }) => (
        <Text>{React.Children.toArray(children).length} top-level node(s)</Text>
      )}
    </WrapperRenderer>
  ));

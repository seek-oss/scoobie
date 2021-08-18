import 'braid-design-system/reset';
import 'loki/configure-react';

import { select, text } from '@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';

import { InlineCode } from './InlineCode';

storiesOf('InlineCode', module)
  .addDecorator(withDecorator)
  .add('Custom', () => (
    <Text>
      Some text with{' '}
      <InlineCode weight={select('weight', ['regular', 'weak'], 'regular')}>
        {text('children', 'inline code')}
      </InlineCode>
      !
    </Text>
  ));

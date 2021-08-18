import '../storybook/register';

import { select, text } from 'sku/@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { InlineCode } from './InlineCode';

storiesOf('InlineCode', module)
  .add('Custom', () => (
    <BraidStorybookProvider>
      <Text>
        Some text with{' '}
        <InlineCode weight={select('weight', ['regular', 'weak'], 'regular')}>
          {text('children', 'inline code')}
        </InlineCode>
        !
      </Text>
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);

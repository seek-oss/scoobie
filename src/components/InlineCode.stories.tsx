import '../storybook/register';

import { Text } from 'braid-design-system';
import React from 'react';
import { select, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import { StorybookProvider } from '../storybook/provider';

import { InlineCode } from './InlineCode';

storiesOf('InlineCode', module)
  .add('Custom', () => (
    <StorybookProvider>
      <Text>
        Some text with{' '}
        <InlineCode weight={select('weight', ['regular', 'weak'], 'regular')}>
          {text('children', 'inline code')}
        </InlineCode>
        !
      </Text>
    </StorybookProvider>
  ))
  .addDecorator(withDecorator);

import '../storybook/register';

import { text } from 'sku/@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { SmartTextLink } from './SmartTextLink';

storiesOf('SmartTextLink', module)
  .add('Custom', () => (
    <BraidStorybookProvider>
      <Text>
        <SmartTextLink href={text('href', 'https://developer.seek.com/schema')}>
          {text('children', 'SEEK Schema')}
        </SmartTextLink>
      </Text>
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);

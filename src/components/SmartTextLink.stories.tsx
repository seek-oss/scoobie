import '../storybook/register';

import { Text } from 'braid-design-system';
import React from 'react';
import { text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import { StorybookProvider } from '../storybook/provider';

import { SmartTextLink } from './SmartTextLink';

storiesOf('SmartTextLink', module)
  .add('Custom', () => (
    <StorybookProvider>
      <Text>
        <SmartTextLink href={text('href', 'https://developer.seek.com/schema')}>
          {text('children', 'SEEK Schema')}
        </SmartTextLink>
      </Text>
    </StorybookProvider>
  ))
  .addDecorator(withDecorator);

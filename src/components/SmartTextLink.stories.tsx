import 'braid-design-system/reset';
import 'loki/configure-react';

import { text } from '@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';

import { SmartTextLink } from './SmartTextLink';

storiesOf('SmartTextLink', module)
  .addDecorator(withDecorator)
  .add('Custom', () => (
    <Text>
      <SmartTextLink href={text('href', 'https://developer.seek.com/schema')}>
        {text('children', 'SEEK Schema')}
      </SmartTextLink>
    </Text>
  ));

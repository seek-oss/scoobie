import 'braid-design-system/reset';
import 'loki/configure-react';

import { text } from '@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { SmartTextLink } from './SmartTextLink';

export default {
  decorators: [ScoobieDecorator],
  title: 'SmartTextLink',
};

export const Custom = () => (
  <Text>
    <SmartTextLink href={text('href', 'https://developer.seek.com/schema')}>
      {text('children', 'SEEK Schema')}
    </SmartTextLink>
  </Text>
);

import 'braid-design-system/reset';
import 'loki/configure-react';

import { select, text } from '@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { InlineCode } from './InlineCode';

export default {
  decorators: [ScoobieDecorator],
  title: 'InlineCode',
};

export const Custom = () => (
  <Text>
    Some text with{' '}
    <InlineCode weight={select('weight', ['regular', 'weak'], 'regular')}>
      {text('children', 'inline code')}
    </InlineCode>
    !
  </Text>
);

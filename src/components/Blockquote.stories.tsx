import 'braid-design-system/reset';
import 'loki/configure-react';

import { select } from '@storybook/addon-knobs';
import { List, Text } from 'braid-design-system';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { Blockquote } from './Blockquote';

export default {
  decorators: [ScoobieDecorator],
  title: 'Blockquote',
};

export const Custom = () => {
  const size = select('size', ['standard', 'large'], 'standard');

  return (
    <Blockquote size={size}>
      <Text size={size}>This is a paragraph.</Text>
      <List size={size}>
        <Text size={size}>This is a bullet point.</Text>
      </List>
    </Blockquote>
  );
};

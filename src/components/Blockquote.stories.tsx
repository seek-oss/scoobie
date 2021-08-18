import 'braid-design-system/reset';
import 'loki/configure-react';

import { List, Text } from 'braid-design-system';
import React from 'react';
import { select } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';

import { Blockquote } from './Blockquote';

storiesOf('Blockquote', module)
  .addDecorator(withDecorator)
  .add('Custom', () => {
    const size = select('size', ['standard', 'large'], 'standard');

    return (
      <Blockquote size={size}>
        <Text size={size}>This is a paragraph.</Text>
        <List size={size}>
          <Text size={size}>This is a bullet point.</Text>
        </List>
      </Blockquote>
    );
  });

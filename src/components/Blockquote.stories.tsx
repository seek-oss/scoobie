import '../storybook/register';

import { select } from '@storybook/addon-knobs';
import { List, Text } from 'braid-design-system';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { Blockquote } from './Blockquote';

storiesOf('Blockquote', module)
  .add('Custom', () => {
    const size = select('size', ['standard', 'large'], 'standard');

    return (
      <BraidStorybookProvider>
        <Blockquote size={size}>
          <Text size={size}>This is a paragraph.</Text>
          <List size={size}>
            <Text size={size}>This is a bullet point.</Text>
          </List>
        </Blockquote>
      </BraidStorybookProvider>
    );
  })
  .addDecorator(withProviders);

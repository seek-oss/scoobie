import '../storybook/register';

import { select, text } from 'sku/@storybook/addon-knobs';
import React from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { CopyableText } from './CopyableText';

storiesOf('CopyableText', module)
  .add('Custom', () => (
    <BraidStorybookProvider>
      <CopyableText
        copiedLabel={select(
          'copiedLabel',
          { undefined, custom: 'Custom copied label' },
          undefined,
        )}
        copyLabel={select(
          'copyLabel',
          { undefined, custom: 'Custom copy label' },
          undefined,
        )}
        size={select(
          'size',
          ['xsmall', 'small', 'standard', 'large'],
          'standard',
        )}
      >
        {text('children', 'copy me')}
      </CopyableText>
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);

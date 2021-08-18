import 'braid-design-system/reset';
import 'loki/configure-react';

import React from 'react';
import { select, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';

import { CopyableText } from './CopyableText';

storiesOf('CopyableText', module)
  .addDecorator(withDecorator)
  .add('Custom', () => (
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
  ));

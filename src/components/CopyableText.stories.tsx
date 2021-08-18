import 'braid-design-system/reset';
import 'loki/configure-react';

import { select, text } from '@storybook/addon-knobs';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { CopyableText } from './CopyableText';

export default {
  decorators: [ScoobieDecorator],
  title: 'CopyableText',
};

export const Custom = () => (
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
    size={select('size', ['xsmall', 'small', 'standard', 'large'], 'standard')}
  >
    {text('children', 'copy me')}
  </CopyableText>
);

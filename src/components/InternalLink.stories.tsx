import 'braid-design-system/reset';
import 'loki/configure-react';

import { boolean, text } from '@storybook/addon-knobs';
import { Alert, Stack, Text } from 'braid-design-system';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';

import { InternalLink } from './InternalLink';

export default {
  decorators: [ScoobieDecorator],
  title: 'InternalLink',
};

export const Custom = () => (
  <InternalLink href={text('href', 'page#id')} reset={boolean('reset', true)}>
    <Alert tone="caution">
      <Stack space="gutter">
        <Text>
          {text('line1', 'InternalLink supports complex components.')}
        </Text>

        <Text size="small">
          {text('line2', 'For example, this whole Alert is a link!')}
        </Text>
      </Stack>
    </Alert>
  </InternalLink>
);

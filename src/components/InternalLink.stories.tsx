import '../storybook/register';

import { Alert, Stack, Text } from 'braid-design-system';
import React from 'react';
import { boolean, text } from 'sku/@storybook/addon-knobs';
import { storiesOf } from 'sku/@storybook/react';

import { withDecorator } from '../storybook/decorator';
import { StorybookProvider } from '../storybook/provider';

import { InternalLink } from './InternalLink';

storiesOf('InternalLink', module)
  .add('Custom', () => (
    <StorybookProvider>
      <InternalLink
        href={text('href', 'page#id')}
        reset={boolean('reset', true)}
      >
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
    </StorybookProvider>
  ))
  .addDecorator(withDecorator);

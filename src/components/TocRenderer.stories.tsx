import 'braid-design-system/reset';
import 'loki/configure-react';

import { Stack, Text } from 'braid-design-system';
import React from 'react';

import { ScoobieDecorator } from '../storybook/decorator';
import Headings from '../storybook/markdown/headings.mdx';

import { SmartTextLink } from './SmartTextLink';
import { TocRenderer } from './TocRenderer';

export default {
  component: TocRenderer,
  decorators: [ScoobieDecorator],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  title: 'TocRenderer',
};

export const Example = () => (
  <Stack space="medium">
    <TocRenderer document={Headings}>
      {(toc) => (
        <Text>
          <Stack space="small">
            {toc.map((item) => (
              <SmartTextLink href={`#${item.id}`} key={item.id}>
                {'|'.repeat(item.level)} {item.children}
              </SmartTextLink>
            ))}
          </Stack>
        </Text>
      )}
    </TocRenderer>
  </Stack>
);

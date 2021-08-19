import 'braid-design-system/reset';
import 'loki/configure-react';

import { Stack, Text } from 'braid-design-system';
import React from 'react';

import { withBraidProvider } from '../storybook/decorators';
import Headings from '../storybook/markdown/headings.mdx';

import { SmartTextLink } from './SmartTextLink';
import { TocRenderer as Component } from './TocRenderer';

export default {
  component: Component,
  decorators: [withBraidProvider],
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  title: 'MDX/TocRenderer',
};

export const TocRenderer = () => (
  <Stack space="medium">
    <Component document={Headings}>
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
    </Component>
  </Stack>
);
TocRenderer.storyName = 'TocRenderer';

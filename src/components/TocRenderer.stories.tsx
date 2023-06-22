import 'braid-design-system/reset';
import 'loki/configure-react';

import { Stack, Text } from 'braid-design-system';
import React from 'react';
import type { StoryObj } from 'sku/@storybook/react';

import HeadingMarkdown from '../storybook/markdown/heading.mdx';

import { SmartTextLink } from './SmartTextLink';
import { TocRenderer as Component } from './TocRenderer';

export default {
  title: 'MDX/TocRenderer',
  component: Component,
};

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    document: HeadingMarkdown,
    children: (toc) => (
      <Text>
        <Stack space="small">
          {toc.map((item) => (
            <SmartTextLink href={`#${item.id}`} key={item.id}>
              {'|'.repeat(item.level)} {item.children}
            </SmartTextLink>
          ))}
        </Stack>
      </Text>
    ),
  },
  name: 'TocRenderer',
};

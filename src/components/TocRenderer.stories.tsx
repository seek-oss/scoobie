import 'loki/configure-react';

import { Stack, Text } from 'braid-design-system';
import React from 'react';
import type { Meta, StoryObj } from 'sku/@storybook/react';

import HeadingMarkdown from '../storybook/markdown/heading.mdx';

import { SmartTextLink } from './SmartTextLink';
import { TocRenderer as Component } from './TocRenderer';

export default {
  title: 'MDX/TocRenderer',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const TocRenderer: Story = {
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
};

import 'loki/configure-react';

import { Alert, Stack, Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';
import type { Meta, StoryObj } from 'sku/@storybook/react';

import { InternalLink as InternalLinkComponent } from './InternalLink';

interface CustomArgs extends ComponentProps<typeof InternalLinkComponent> {
  line1: string;
  line2: string;
}

const Component = ({ line1, line2, ...args }: CustomArgs) => (
  <InternalLinkComponent {...args}>
    <Alert tone="caution">
      <Stack space="gutter">
        <Text>{line1}</Text>
        <Text size="small">{line2}</Text>
      </Stack>
    </Alert>
  </InternalLinkComponent>
);

export default {
  title: 'Standalone/InternalLink',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const InternalLink: Story = {
  args: {
    href: 'page#id',
    reset: true,
    line1: 'InternalLink supports complex components.',
    line2: 'For example, this whole Alert is a link!',
  },
};

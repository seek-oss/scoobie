import 'loki/configure-react';

import { Alert, Stack, Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';
import type { StoryObj } from 'sku/@storybook/react';

import { InternalLink } from './InternalLink';

interface CustomArgs extends ComponentProps<typeof InternalLink> {
  line1: string;
  line2: string;
}

const Component = ({ line1, line2, ...args }: CustomArgs) => (
  <InternalLink {...args}>
    <Alert tone="caution">
      <Stack space="gutter">
        <Text>{line1}</Text>
        <Text size="small">{line2}</Text>
      </Stack>
    </Alert>
  </InternalLink>
);

export default {
  title: 'Standalone/InternalLink',
  component: Component,
};

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    href: 'page#id',
    reset: true,
    line1: 'InternalLink supports complex components.',
    line2: 'For example, this whole Alert is a link!',
  },
  name: 'InternalLink',
};

import 'braid-design-system/reset';
import 'loki/configure-react';

import { Alert, Stack, Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { withBraidProvider } from '../storybook/decorators';

import { InternalLink as Component } from './InternalLink';

export default {
  args: {
    href: 'page#id',
    reset: true,
  },
  component: Component,
  decorators: [withBraidProvider],
  title: 'Standalone/InternalLink',
};

type Args = ComponentProps<typeof Component>;

interface CustomArgs extends Args {
  line1: string;
  line2: string;
}

export const InternalLink = ({ line1, line2, ...args }: CustomArgs) => (
  <Component {...args}>
    <Alert tone="caution">
      <Stack space="gutter">
        <Text>{line1}</Text>

        <Text size="small">{line2}</Text>
      </Stack>
    </Alert>
  </Component>
);
InternalLink.args = {
  line1: 'InternalLink supports complex components.',
  line2: 'For example, this whole Alert is a link!',
};
InternalLink.argTypes = {
  line1: { control: { type: 'text' } },
  line2: { control: { type: 'text' } },
};
InternalLink.storyName = 'InternalLink';

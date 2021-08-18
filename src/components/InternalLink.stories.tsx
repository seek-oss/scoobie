import 'braid-design-system/reset';
import 'loki/configure-react';

import { Alert, Stack, Text } from 'braid-design-system';
import React from 'react';
import { ComponentProps } from 'react';

import { DesignDecorator } from '../storybook/decorators';

import { InternalLink } from './InternalLink';

export default {
  argTypes: {
    href: {
      defaultValue: 'page#id',
    },
    reset: {
      defaultValue: true,
    },
  },
  component: InternalLink,
  decorators: [DesignDecorator],
  title: 'InternalLink',
};

type Args = ComponentProps<typeof InternalLink>;

interface CustomArgs extends Args {
  line1: string;
  line2: string;
}

export const Custom = ({ line1, line2, ...args }: CustomArgs) => (
  <InternalLink {...args}>
    <Alert tone="caution">
      <Stack space="gutter">
        <Text>{line1}</Text>

        <Text size="small">{line2}</Text>
      </Stack>
    </Alert>
  </InternalLink>
);
Custom.argTypes = {
  line1: {
    control: { type: 'text' },
    defaultValue: 'InternalLink supports complex components.',
  },
  line2: {
    control: { type: 'text' },
    defaultValue: 'For example, this whole Alert is a link!',
  },
};

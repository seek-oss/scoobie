import 'braid-design-system/reset';
import 'loki/configure-react';

import { Alert, Stack, Text } from 'braid-design-system';
import React, { type ComponentProps } from 'react';

import {
  type BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { InternalLink as Component } from './InternalLink';

export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    href: 'page#id',
    reset: true,
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/InternalLink',
};

type Args = ComponentProps<typeof Component> & BraidArgs;

interface CustomArgs extends Args {
  line1: string;
  line2: string;
}

export const InternalLink = ({
  braidThemeName,
  line1,
  line2,
  ...args
}: CustomArgs) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args}>
      <Alert tone="caution">
        <Stack space="gutter">
          <Text>{line1}</Text>

          <Text size="small">{line2}</Text>
        </Stack>
      </Alert>
    </Component>
  </BraidStorybookProvider>
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

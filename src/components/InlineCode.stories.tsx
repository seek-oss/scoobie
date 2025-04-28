import 'loki/configure-react';

import type { Meta, StoryObj } from '@storybook/react';
import { Text, Box } from 'braid-design-system';
import type { ComponentType } from 'react';

import { InlineCode as InlineCodeComponent } from './InlineCode';

const defaultDecorator = (Inner: ComponentType) => (
  <Text>
    Some text with <Inner />!
  </Text>
);

export default {
  title: 'Standalone/InlineCode',
  component: InlineCodeComponent,
} satisfies Meta<typeof InlineCode>;

type Story = StoryObj<typeof InlineCodeComponent>;

export const InlineCode: Story = {
  decorators: defaultDecorator,
  args: {
    children: 'inline code',
  },
};

export const InALongSentence: Story = {
  decorators: (Inner: ComponentType) => (
    <Text>
      Est aute adipisicing esse et amet nostrud sint. Fugiat consequat ex eu
      esse ad nulla irure culpa amet elit Lorem do laboris dolor. Eu tempor sit
      commodo occaecat nisi occaecat ex excepteur et. <Inner />. Ad irure magna
      irure sit. Consectetur sint voluptate enim Lorem deserunt est dolor amet
      ex voluptate incididunt commodo. Cillum excepteur sunt ut mollit nulla
      consequat qui quis eiusmod ea irure culpa incididunt veniam nostrud. Magna
      occaecat consectetur tempor commodo fugiat incididunt tempor enim nisi
      consectetur minim id consectetur. Commodo minim consectetur voluptate in
      ea.
    </Text>
  ),
  args: {
    children: 'inline code',
  },
};

export const Weak: Story = {
  decorators: defaultDecorator,
  args: {
    children: 'weak inline code',
    weight: 'weak',
  },
};

export const Color: Story = {
  decorators: defaultDecorator,
  args: {
    children: '#abc012',
  },
};

export const WidthConstrained: Story = {
  args: {
    children: 'a very long inline code sentence which wraps',
  },
  decorators: [
    defaultDecorator,
    (Inner) => (
      <Box style={{ width: 100 }} boxShadow="borderBrandAccent">
        <Inner />
      </Box>
    ),
  ],
};

export const WidthConstrainedWeak: Story = {
  args: {
    children: 'a very long weak inline code sentence which wraps',
    weight: 'weak',
  },
  decorators: [
    defaultDecorator,
    (Inner) => (
      <Box style={{ width: 100 }} boxShadow="borderBrandAccent">
        <Inner />
      </Box>
    ),
  ],
};

export const WidthConstrainedWithUnwrappableContents: Story = {
  args: {
    children:
      'veryveryveryveryveryveryveryveryveryverylonginlinecodesentencewhichwraps',
  },
  decorators: [
    defaultDecorator,
    (Inner) => (
      <Box style={{ width: 100 }} boxShadow="borderBrandAccent">
        <Inner />
      </Box>
    ),
  ],
};

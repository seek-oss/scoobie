import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

import { Placeholder as PlaceholderComponent } from './Placeholder';

type Props = ComponentProps<typeof PlaceholderComponent>;

const Component = (props: Props) => <PlaceholderComponent {...props} />;

export default {
  title: 'Standalone/Placeholder',
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Placeholder: Story = {
  args: {
    width: '10rem',
    height: '10rem',
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Stack, Text } from "braid-design-system";
import React, { type ComponentProps } from "react";

import { Placeholder as PlaceholderComponent } from "./Placeholder";

interface Props extends ComponentProps<typeof PlaceholderComponent> {}

const Component = (props: Props) => <PlaceholderComponent {...props} />;

export default {
  title: "Standalone/Placeholder",
  component: Component,
} satisfies Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Placeholder: Story = {
  args: {
    width: "10rem",
    height: "10rem",
  },
};

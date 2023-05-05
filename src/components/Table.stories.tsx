import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { type ComponentProps, Fragment } from 'react';

import {
  type BraidArgs,
  defaultArgTypes,
  defaultArgs,
} from '../storybook/controls';
import { BraidStorybookProvider, withRouter } from '../storybook/decorators';

import { Table as Component } from './Table';
import { TableRow } from './TableRow';
export default {
  args: {
    braidThemeName: defaultArgs.braidThemeName,
    size: defaultArgs.size,
    width: 'undefined',
  },
  argTypes: {
    braidThemeName: defaultArgTypes.braidThemeName,
    size: defaultArgTypes.size,
    width: {
      control: { type: 'radio' },
      mapping: { undefined, full: 'full' },
      options: ['undefined', 'full'],
    },
  },
  component: Component,
  decorators: [withRouter],
  title: 'Standalone/Table',
};

type Args = Omit<ComponentProps<typeof Component>, 'width'> & BraidArgs;

export const Defaults = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args}>
      <TableRow>
        <Fragment>This is body cell A1.</Fragment>
        <Fragment>B1</Fragment>
      </TableRow>

      <TableRow>
        <Fragment>A2</Fragment>
        <Fragment>This is body cell B2.</Fragment>
      </TableRow>
    </Component>
  </BraidStorybookProvider>
);
Defaults.args = {
  header: ['Column A', 'Column B'],
};

export const Stripe = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args}>
      <TableRow>
        <Text>This is body cell A1.</Text>
        <Text weight="strong">B1</Text>
      </TableRow>

      <TableRow>
        <Fragment>A2</Fragment>
        <Fragment>This is body cell B2.</Fragment>
      </TableRow>
    </Component>
  </BraidStorybookProvider>
);
Stripe.args = {
  align: ['left', 'right'],
  header: (
    <Fragment>
      <Fragment>Column A</Fragment>
      <Text weight="regular">Column B</Text>
    </Fragment>
  ),
  type: 'stripe',
};

export const Subtle = ({ braidThemeName, ...args }: Args) => (
  <BraidStorybookProvider braidThemeName={braidThemeName}>
    <Component {...args}>
      <TableRow>
        <Fragment>This is body cell A1.</Fragment>
        <Fragment>B1</Fragment>
      </TableRow>

      <TableRow>
        <Fragment>A2</Fragment>
        <Fragment>This is body cell B2.</Fragment>
      </TableRow>
    </Component>
  </BraidStorybookProvider>
);
Subtle.args = {
  header: ['Column A', 'Column B'],
  type: 'subtle',
};

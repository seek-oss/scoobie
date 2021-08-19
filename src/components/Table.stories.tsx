import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { ComponentProps, Fragment } from 'react';

import { defaultArgTypes, defaultArgs } from '../storybook/controls';
import { DesignDecorator } from '../storybook/decorators';

import { Table as Component } from './Table';
import { TableRow } from './TableRow';

export default {
  args: {
    size: defaultArgs.size,
    width: 'undefined',
  },
  argTypes: {
    size: defaultArgTypes.size,
    width: {
      control: { type: 'radio' },
      mapping: { undefined, full: 'full' },
      options: ['undefined', 'full'],
    },
  },
  component: Component,
  decorators: [DesignDecorator],
  title: 'Standalone/Table',
};

type Args = Omit<ComponentProps<typeof Component>, 'width'>;

export const Defaults = (args: Args) => (
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
);
Defaults.args = {
  header: ['Column A', 'Column B'],
};

export const Stripe = (args: Args) => (
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

export const Subtle = (args: Args) => (
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
);
Subtle.args = {
  header: ['Column A', 'Column B'],
  type: 'subtle',
};

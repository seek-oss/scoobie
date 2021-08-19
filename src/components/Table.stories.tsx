import 'braid-design-system/reset';
import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { ComponentProps, Fragment } from 'react';

import { argTypes } from '../storybook/controls';
import { DesignDecorator } from '../storybook/decorators';

import { Table } from './Table';
import { TableRow } from './TableRow';

export default {
  argTypes: {
    size: argTypes.size,
    width: {
      control: {
        options: ['undefined', 'full'],
        type: 'radio',
      },
      defaultValue: 'undefined',
    },
  },
  component: Table,
  decorators: [DesignDecorator],
  title: 'Table',
};

interface Args extends Omit<ComponentProps<typeof Table>, 'width'> {
  width: 'full' | 'undefined';
}

export const Defaults = ({ width, ...args }: Args) => (
  <Table {...args} width={width === 'undefined' ? undefined : width}>
    <TableRow>
      <Fragment>This is body cell A1.</Fragment>
      <Fragment>B1</Fragment>
    </TableRow>

    <TableRow>
      <Fragment>A2</Fragment>
      <Fragment>This is body cell B2.</Fragment>
    </TableRow>
  </Table>
);
Defaults.argTypes = {
  header: {
    defaultValue: ['Column A', 'Column B'],
  },
};

export const Stripe = ({ width, ...args }: Args) => (
  <Table {...args} width={width === 'undefined' ? undefined : width}>
    <TableRow>
      <Text>This is body cell A1.</Text>
      <Text weight="strong">B1</Text>
    </TableRow>

    <TableRow>
      <Fragment>A2</Fragment>
      <Fragment>This is body cell B2.</Fragment>
    </TableRow>
  </Table>
);
Stripe.argTypes = {
  align: {
    defaultValue: ['left', 'right'],
  },
  header: {
    defaultValue: (
      <Fragment>
        <Fragment>Column A</Fragment>
        <Text weight="regular">Column B</Text>
      </Fragment>
    ),
  },
  type: {
    defaultValue: 'stripe',
  },
};

export const Subtle = ({ width, ...args }: Args) => (
  <Table {...args} width={width === 'undefined' ? undefined : width}>
    <TableRow>
      <Fragment>This is body cell A1.</Fragment>
      <Fragment>B1</Fragment>
    </TableRow>

    <TableRow>
      <Fragment>A2</Fragment>
      <Fragment>This is body cell B2.</Fragment>
    </TableRow>
  </Table>
);
Subtle.argTypes = {
  header: {
    defaultValue: ['Column A', 'Column B'],
  },
  type: {
    defaultValue: 'subtle',
  },
};

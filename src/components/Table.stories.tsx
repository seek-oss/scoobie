import 'loki/configure-react';

import { Text } from 'braid-design-system';
import React, { Fragment } from 'react';
import type { StoryObj } from 'sku/@storybook/react';

import { Table as Component } from './Table';
import { TableRow } from './TableRow';
export default {
  title: 'Standalone/Table',
  component: Component,
  args: {
    size: 'standard',
    width: 'undefined',
  },
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['standard', 'large'],
    },
    width: {
      control: { type: 'radio' },
      mapping: { undefined, full: 'full' },
      options: ['undefined', 'full'],
    },
  },
};

type Story = StoryObj<typeof Component>;

export const Defaults: Story = {
  args: {
    header: ['Column A', 'Column B'],
    children: (
      <>
        <TableRow>
          <Fragment>This is body cell A1.</Fragment>
          <Fragment>B1</Fragment>
        </TableRow>
        <TableRow>
          <Fragment>A2</Fragment>
          <Fragment>This is body cell B2.</Fragment>
        </TableRow>
      </>
    ),
  },
};

export const Stripe: Story = {
  args: {
    align: ['left', 'right'],
    header: (
      <Fragment>
        <Fragment>Column A</Fragment>
        <Text weight="regular">Column B</Text>
      </Fragment>
    ),
    type: 'stripe',
    children: (
      <>
        <TableRow>
          <Text>This is body cell A1.</Text>
          <Text weight="strong">B1</Text>
        </TableRow>

        <TableRow>
          <Fragment>A2</Fragment>
          <Fragment>This is body cell B2.</Fragment>
        </TableRow>
      </>
    ),
  },
};

export const Subtle: Story = {
  args: {
    header: ['Column A', 'Column B'],
    type: 'subtle',
    children: (
      <>
        <TableRow>
          <Fragment>This is body cell A1.</Fragment>
          <Fragment>B1</Fragment>
        </TableRow>

        <TableRow>
          <Fragment>A2</Fragment>
          <Fragment>This is body cell B2.</Fragment>
        </TableRow>
      </>
    ),
  },
};

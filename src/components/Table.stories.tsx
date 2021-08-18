import '../storybook/register';

import { select } from 'sku/@storybook/addon-knobs';
import { Text } from 'braid-design-system';
import React, { Fragment } from 'react';
import { storiesOf } from 'sku/@storybook/react';

import { BraidStorybookProvider, withProviders } from '../storybook/provider';

import { Table } from './Table';
import { TableRow } from './TableRow';

storiesOf('Table', module)
  .add('Defaults', () => (
    <BraidStorybookProvider>
      <Table header={['Column A', 'Column B']}>
        <TableRow>
          <Fragment>This is body cell A1.</Fragment>
          <Fragment>B1</Fragment>
        </TableRow>

        <TableRow>
          <Fragment>A2</Fragment>
          <Fragment>This is body cell B2.</Fragment>
        </TableRow>
      </Table>
    </BraidStorybookProvider>
  ))
  .add('Stripe', () => (
    <BraidStorybookProvider>
      <Table
        align={['left', 'right']}
        header={
          <Fragment>
            <Fragment>Column A</Fragment>
            <Text weight="regular">Column B</Text>
          </Fragment>
        }
        size={select('size', ['standard', 'large'], 'standard')}
        type="stripe"
        width={select('width', { undefined, full: 'full' }, undefined)}
      >
        <TableRow>
          <Text>This is body cell A1.</Text>
          <Text weight="strong">B1</Text>
        </TableRow>

        <TableRow>
          <Fragment>A2</Fragment>
          <Fragment>This is body cell B2.</Fragment>
        </TableRow>
      </Table>
    </BraidStorybookProvider>
  ))
  .add('Subtle', () => (
    <BraidStorybookProvider>
      <Table
        header={['Column A', 'Column B']}
        size={select('size', ['standard', 'large'], 'standard')}
        type="subtle"
        width={select('width', { undefined, full: 'full' }, undefined)}
      >
        <TableRow>
          <Fragment>This is body cell A1.</Fragment>
          <Fragment>B1</Fragment>
        </TableRow>

        <TableRow>
          <Fragment>A2</Fragment>
          <Fragment>This is body cell B2.</Fragment>
        </TableRow>
      </Table>
    </BraidStorybookProvider>
  ))
  .addDecorator(withProviders);

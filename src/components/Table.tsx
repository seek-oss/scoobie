import { Box, Stack } from 'braid-design-system';
import React, { ComponentProps, ReactNode } from 'react';

import { BaseTable } from '../private/Table';
import {
  DEFAULT_TABLE_TYPE,
  TableAlign,
  TableContext,
  TableType,
} from '../private/TableContext';
import { DEFAULT_SIZE, Size } from '../private/size';

import { TableRow } from './TableRow';

interface Props {
  align?: ReadonlyArray<TableAlign>;
  children: ReactNode;
  header: ComponentProps<typeof Stack>['children'] | ReadonlyArray<string>;
  size?: Size;
  type?: TableType;
  width?: 'full';
}

export const Table = ({
  align,
  children,
  header,
  size = DEFAULT_SIZE,
  type = DEFAULT_TABLE_TYPE,
  width,
}: Props) => (
  <BaseTable width={width}>
    <TableContext.Provider
      value={{
        align,
        component: 'th',
        size,
        type,
      }}
    >
      <Box component="thead">
        <TableRow>{header}</TableRow>
      </Box>
    </TableContext.Provider>

    <TableContext.Provider
      value={{
        align,
        component: 'td',
        size,
        type,
      }}
    >
      <Box component="tbody">{children}</Box>
    </TableContext.Provider>
  </BaseTable>
);

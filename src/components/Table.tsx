import { Box, type Stack } from 'braid-design-system';
import React, { type ComponentProps, type ReactNode } from 'react';

import { BaseTable } from '../private/Table';
import {
  DEFAULT_TABLE_TYPE,
  type TableAlign,
  TableContext,
  type TableType,
} from '../private/TableContext';
import { DEFAULT_SIZE, type Size } from '../private/size';

import { TableRow } from './TableRow';

interface Props {
  align?: readonly TableAlign[];
  children: ReactNode;
  header: ComponentProps<typeof Stack>['children'] | readonly string[];
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

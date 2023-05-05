import { Box } from 'braid-design-system';
import React, { type ReactNode } from 'react';

import {
  DEFAULT_TABLE_CELL_COMPONENT,
  DEFAULT_TABLE_TYPE,
  TableContext,
  type TableType,
} from './TableContext';
import { DEFAULT_SIZE, type Size } from './size';

import * as styles from './Table.css';

interface BaseTableProps {
  children: ReactNode;
  width?: 'full';
}

export const BaseTable = ({ children, width }: BaseTableProps) => (
  <Box
    component="table"
    className={{ [styles.table]: true, [styles.fullWidth]: width === 'full' }}
  >
    {children}
  </Box>
);

interface MdxTableProps {
  children: ReactNode;
  size?: Size;
  type?: TableType;
}

export const MdxTable = ({
  children,
  size = DEFAULT_SIZE,
  type = DEFAULT_TABLE_TYPE,
}: MdxTableProps) => (
  <TableContext.Provider
    value={{
      component: DEFAULT_TABLE_CELL_COMPONENT,
      size,
      type,
    }}
  >
    <Box className={styles.tableWrapper}>
      <BaseTable>{children}</BaseTable>
    </Box>
  </TableContext.Provider>
);

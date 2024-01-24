import { Box } from 'braid-design-system';
import React, { Fragment, type ReactNode } from 'react';

import { ScrollableInline } from './ScrollableInline';
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
  overflowX?: 'scroll';
  whiteSpace?: 'nowrap';
  width?: 'full';
}

export const BaseTable = ({
  children,
  overflowX,
  whiteSpace,
  width,
}: BaseTableProps) => {
  const Wrapper = overflowX === 'scroll' ? ScrollableInline : Fragment;

  return (
    <Wrapper {...(overflowX === 'scroll' ? { whiteSpace } : {})}>
      <Box
        component="table"
        className={{
          [styles.table]: true,
          [styles.fullWidth]: width === 'full',
        }}
      >
        {children}
      </Box>
    </Wrapper>
  );
};

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
    <BaseTable overflowX="scroll" width="full">
      {children}
    </BaseTable>
  </TableContext.Provider>
);

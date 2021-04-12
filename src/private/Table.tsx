import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';

import {
  DEFAULT_TABLE_CELL_COMPONENT,
  DEFAULT_TABLE_TYPE,
  TableContext,
  TableType,
} from './TableContext';
import { DEFAULT_SIZE, Size } from './size';

import * as styleRefs from './Table.treat';

interface BaseTableProps {
  children: ReactNode;
  width?: 'full';
}

export const BaseTable = ({ children, width }: BaseTableProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      component="table"
      className={{ [styles.table]: true, [styles.fullWidth]: width === 'full' }}
    >
      {children}
    </Box>
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
}: MdxTableProps) => {
  const styles = useStyles(styleRefs);

  return (
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
};

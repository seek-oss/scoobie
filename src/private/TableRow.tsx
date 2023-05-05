import { Box } from 'braid-design-system';
import React, { useContext } from 'react';

import { TableContext } from '../private/TableContext';

import type { StackChildrenProps } from './types';

import * as styles from './TableRow.css';

interface Props extends StackChildrenProps {
  selected?: boolean;
}

export const BaseTableRow = ({ children, selected }: Props) => {
  const { type } = useContext(TableContext);

  return (
    <Box
      className={{
        [styles.tableRow[type]]: true,
        [styles.tableRowSelection]: selected,
      }}
      component="tr"
    >
      {children}
    </Box>
  );
};

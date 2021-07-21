import { Box, Stack } from 'braid-design-system';
import React, { ComponentProps, useContext } from 'react';

import { TableContext } from '../private/TableContext';

import * as styles from './TableRow.css';

interface Props {
  children: ComponentProps<typeof Stack>['children'];
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

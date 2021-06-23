import { Box, Stack } from 'braid-design-system';
import React, { ComponentProps, useContext } from 'react';

import { TableContext } from '../private/TableContext';

import * as styles from './TableRow.css';

type Props = Pick<ComponentProps<typeof Stack>, 'children'>;

export const BaseTableRow = ({ children }: Props) => {
  const { type } = useContext(TableContext);

  return (
    <Box className={styles.tableRow[type]} component="tr">
      {children}
    </Box>
  );
};

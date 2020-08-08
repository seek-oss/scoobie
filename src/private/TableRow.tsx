import { Box, Stack } from 'braid-design-system';
import React, { ComponentProps, useContext } from 'react';
import { useStyles } from 'sku/react-treat';

import { TableContext } from '../private/TableContext';

import * as styleRefs from './TableRow.treat';

type Props = Pick<ComponentProps<typeof Stack>, 'children'>;

export const BaseTableRow = ({ children }: Props) => {
  const styles = useStyles(styleRefs);

  const { type } = useContext(TableContext);

  return (
    <Box className={styles.tableRow[type]} component="tr">
      {children}
    </Box>
  );
};

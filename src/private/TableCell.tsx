import { Box, Stack } from 'braid-design-system';
import React, { ComponentProps, useContext } from 'react';
import { useStyles } from 'sku/react-treat';

import { TableAlign, TableContext } from './TableContext';
import { SIZE_TO_PADDING, SIZE_TO_SPACE } from './size';

import * as styleRefs from './TableCell.treat';

interface Props {
  align?: TableAlign | null;
  children: ComponentProps<typeof Stack>['children'];
  component: 'td' | 'th';
}

export const TableCell = ({ align, children, component }: Props) => {
  const styles = useStyles(styleRefs);

  const { size, type } = useContext(TableContext);

  const padding = SIZE_TO_PADDING[size];
  const space = SIZE_TO_SPACE[size];

  return (
    <Box
      className={[
        styles.tableCell[type],
        component === 'td' ? styles.td[type] : styles.th[type],
      ]}
      component={component}
      padding={padding}
      textAlign={align ?? (component === 'td' ? 'left' : 'center')}
    >
      <Stack space={space}>{children}</Stack>
    </Box>
  );
};

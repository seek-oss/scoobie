import { Box, Stack } from 'braid-design-system';
import { useContext } from 'react';

import { TableContext } from './TableContext';
import { SIZE_TO_SPACE, SIZE_TO_TABLE_PADDING } from './size';
import type { StackChildrenProps } from './types';

import * as styles from './TableCell.css';

interface Props extends StackChildrenProps {
  align?: string;
  component: 'td' | 'th';
}

const isValidAlign = (
  align: unknown,
): align is 'left' | 'center' | 'right' | null =>
  ['left', 'center', 'right', null].includes(align as string | null);

export const TableCell = ({ align, children, component }: Props) => {
  if (!isValidAlign(align)) {
    throw new Error(
      `TableCell: Invalid align prop "${align}". Must be one of: left, center, right, null`,
    );
  }

  const { size, type } = useContext(TableContext);

  const padding = SIZE_TO_TABLE_PADDING[size];
  const space = SIZE_TO_SPACE[size];

  return (
    <Box
      className={[
        styles.tableCell[type],
        component === 'td' ? styles.td[size][type] : styles.th[type],
      ]}
      component={component}
      padding={padding}
      textAlign={align ?? (component === 'td' ? 'left' : 'center')}
    >
      <Stack space={space}>{children}</Stack>
    </Box>
  );
};

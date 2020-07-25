import { Box, Stack, Text } from 'braid-design-system';
import React, { ComponentProps } from 'react';
import { useStyles } from 'sku/react-treat';

import { SIZE_TO_SPACE, Size } from './size';

import * as styleRefs from './List.treat';

type Props = Pick<ComponentProps<typeof Stack>, 'children'> & {
  size: Size;
};

export const ListItem = ({ children, size }: Props) => {
  const styles = useStyles(styleRefs);

  const space = SIZE_TO_SPACE[size];

  return (
    <Box className={styles.listTableRow} component="li">
      <Box className={styles.listTableCell[size]}>
        <Text size={size}>
          <Box className={styles.listItem} />
        </Text>
      </Box>
      <Box className={styles.listTableCell[size]}>
        <Stack space={space}>{children}</Stack>
      </Box>
    </Box>
  );
};

export const OrderedList = ({ children }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={[styles.listTable, styles.orderedList]} component="ol">
      {children}
    </Box>
  );
};

export const UnorderedList = ({ children }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={[styles.listTable, styles.unorderedList]} component="ul">
      {children}
    </Box>
  );
};

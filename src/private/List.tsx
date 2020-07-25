import { Box, Stack, Text } from 'braid-design-system';
import React, { ComponentProps, Fragment } from 'react';
import { useStyles } from 'sku/react-treat';

import { SIZE_TO_SPACE, Size } from './size';

import * as styleRefs from './useMdxComponents.treat';

type Props = Pick<ComponentProps<typeof Stack>, 'children'> & {
  size: Size;
};

export const ListItem = ({ children, size }: Props) => {
  const styles = useStyles(styleRefs);

  const space = SIZE_TO_SPACE[size];

  return (
    <Fragment>
      <Text size={size}>
        <Box className={styles.listItem} />
      </Text>
      <Box component="li">
        <Stack space={space}>{children}</Stack>
      </Box>
    </Fragment>
  );
};

export const OrderedList = ({ children, size }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={[styles.listGrid[size], styles.orderedList]} component="ol">
      {children}
    </Box>
  );
};

export const UnorderedList = ({ children, size }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      className={[styles.listGrid[size], styles.unorderedList]}
      component="ul"
    >
      {children}
    </Box>
  );
};

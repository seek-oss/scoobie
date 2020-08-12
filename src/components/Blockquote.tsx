import { Box, Stack } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { DEFAULT_SIZE, SIZE_TO_SPACE, Size } from '../private/size';

import * as styleRefs from './Blockquote.treat';

interface Props {
  children: React.ComponentProps<typeof Stack>['children'];
  size: Size;
}

export const Blockquote = ({ children, size = DEFAULT_SIZE }: Props) => {
  const styles = useStyles(styleRefs);

  const space = SIZE_TO_SPACE[size];

  return (
    <Box className={styles.quoteBlock} padding={space}>
      <Stack space={space}>{children}</Stack>
    </Box>
  );
};

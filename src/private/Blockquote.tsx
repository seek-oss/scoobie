import { Box, Stack } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleRefs from './Blockquote.treat';

type StackChildren = React.ComponentProps<typeof Stack>['children'];

export const Blockquote = ({ children }: { children: StackChildren }) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.quoteBlock} padding="small">
      <Stack space="medium">{children}</Stack>
    </Box>
  );
};

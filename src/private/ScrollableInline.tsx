import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleRefs from './ScrollableInline.treat';

interface Props {
  children: ReactNode;
}

export const ScrollableInline = ({ children }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.trimPaddingY}>
      <Box className={styles.scrollX} paddingY="small" width="full">
        {children}
      </Box>
    </Box>
  );
};

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
    <Box className={styles.overflowX}>
      <Box className={styles.nowrap} display="inlineBlock" width="full">
        {children}
      </Box>
    </Box>
  );
};

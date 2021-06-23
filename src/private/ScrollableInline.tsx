import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';

import * as styles from './ScrollableInline.css';

interface Props {
  children: ReactNode;
}

export const ScrollableInline = ({ children }: Props) => (
  <Box className={styles.trimPaddingY}>
    <Box className={styles.scrollX} paddingY="small" width="full">
      {children}
    </Box>
  </Box>
);

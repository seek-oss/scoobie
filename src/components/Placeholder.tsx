import { Box } from 'braid-design-system';
import type React from 'react';

import * as styles from './Placeholder.css';

export const Placeholder = ({
  width,
  height,
}: Pick<React.HTMLProps<HTMLDivElement>, 'width' | 'height'>) => (
  <Box
    className={styles.placeholderContainer}
    position="relative"
    overflow="hidden"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius={undefined}
    style={{
      width,
      height,
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className={styles.box}>
      <line className={styles.xLine} x1="0" y1="0" x2="100%" y2="100%" />
      <line className={styles.xLine} x1="100%" y1="0" x2="0" y2="100%" />
    </svg>
  </Box>
);

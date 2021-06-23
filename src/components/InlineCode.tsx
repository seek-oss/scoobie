import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';

import * as styles from './InlineCode.css';

interface Props {
  children: ReactNode;
  weight?: 'regular' | 'weak';
}

export const InlineCode = ({ children, weight = 'regular' }: Props) => (
  <Box
    borderRadius="standard"
    className={[styles.base, styles.weight[weight]]}
    component="code"
  >
    {children}
  </Box>
);

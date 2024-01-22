import { Bleed, Box } from 'braid-design-system';
import React, { type ReactNode } from 'react';

import * as styles from './ScrollableInline.css';

interface Props {
  children: ReactNode;
  whiteSpace?: 'nowrap';
}

export const ScrollableInline = ({ children, whiteSpace }: Props) => (
  <Bleed vertical="small">
    <Box
      className={[styles.scrollX, styles.whiteSpace[whiteSpace ?? 'undefined']]}
      paddingY="small"
      width="full"
    >
      {children}
    </Box>
  </Bleed>
);

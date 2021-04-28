import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleRefs from './InlineCode.treat';

interface Props {
  children: ReactNode;
  weight?: 'regular' | 'weak';
}

export const InlineCode = ({ children, weight = 'regular' }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      borderRadius="standard"
      className={[styles.base, styles.weight[weight]]}
      component="code"
    >
      {children}
    </Box>
  );
};

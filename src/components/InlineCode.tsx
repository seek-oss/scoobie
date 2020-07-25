import { Box } from 'braid-design-system';
import React, { ReactNode } from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleRefs from './InlineCode.treat';

interface Props {
  children: ReactNode;
}

export const InlineCode = ({ children }: Props) => {
  const styles = useStyles(styleRefs);

  return (
    <Box
      borderRadius="standard"
      className={styles.inlineCode}
      component="code"
      paddingX="xxsmall"
    >
      {children}
    </Box>
  );
};

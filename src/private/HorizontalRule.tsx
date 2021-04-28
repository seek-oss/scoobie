import { Box } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import * as styleRefs from './HorizontalRule.treat';

export const HorizontalRule = () => {
  const styles = useStyles(styleRefs);

  return <Box className={styles.hr} component="hr" />;
};

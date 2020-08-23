import { Box, Stack } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { CodeSize } from '../../private/size';

import * as styleRefs from '../CodeBlock.treat';

interface Props {
  codeSize: CodeSize;
  count: number;
}

export const LineNumbers = ({ count, codeSize }: Props) => {
  const styles = useStyles(styleRefs);

  const numbers = [...new Array(count)].map((_, index) => index + 1);

  return (
    <Box aria-hidden className={styles.lineNumberContainer} padding="medium">
      <Stack align="right" space="small">
        {numbers.map((number) => (
          <Box className={styles.code[codeSize]} component="pre" key={number}>
            {number}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

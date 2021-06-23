import { Box, Stack } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { CodeSize } from '../../private/size';

import * as styles from '../CodeBlock.css';
import * as treatStyleRefs from '../CodeBlock.treat';

interface Props {
  codeSize: CodeSize;
  count: number;
}

export const LineNumbers = ({ count, codeSize }: Props) => {
  const treatStyles = useStyles(treatStyleRefs);

  const numbers = [...new Array(count)].map((_, index) => index + 1);

  return (
    <Box aria-hidden className={styles.lineNumberContainer} padding="medium">
      <Stack align="right" space="small">
        {numbers.map((number) => (
          <Box className={treatStyles.code[codeSize]} key={number}>
            <Box component="pre">{number}</Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

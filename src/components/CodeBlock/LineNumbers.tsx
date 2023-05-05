import { Box, Stack } from 'braid-design-system';
import React from 'react';

import type { Size } from '../../private/size';

import { code } from '../../../styles/code.css';
import * as styles from '../CodeBlock.css';

interface Props {
  count: number;
  size: Size;
}

export const LineNumbers = ({ count, size }: Props) => {
  const numbers = [...new Array(count)].map((_, index) => index + 1);

  return (
    <Box aria-hidden className={styles.lineNumberContainer} padding="medium">
      <Stack align="right" space="small">
        {numbers.map((number) => (
          <Box className={code[size]} key={number}>
            <Box component="pre">{number}</Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

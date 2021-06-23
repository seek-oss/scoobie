import { Box, Heading, Secondary, Stack } from 'braid-design-system';
import React from 'react';

import { DEFAULT_SIZE, SIZE_TO_SPACE, Size } from '../private/size';

import * as styles from './Blockquote.css';

interface Props {
  children: React.ComponentProps<typeof Stack>['children'];
  size: Size;
}

export const Blockquote = ({ children, size = DEFAULT_SIZE }: Props) => {
  const space = SIZE_TO_SPACE[size];

  return (
    <Box className={styles.quoteBlock} padding={space}>
      <Stack space={space}>{children}</Stack>

      <Box position="absolute" right={0} top={0} userSelect="none" zIndex={0}>
        <Heading component="div" level="2">
          <Secondary>”</Secondary>
        </Heading>
      </Box>
    </Box>
  );
};

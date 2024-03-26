import { Box, Heading, Secondary, Stack } from 'braid-design-system';

import { DEFAULT_SIZE, SIZE_TO_SPACE, type Size } from '../private/size';
import type { StackChildrenProps } from '../private/types';

import * as styles from './Blockquote.css';

interface Props extends StackChildrenProps {
  size: Size;
}

export const Blockquote = ({ children = null, size = DEFAULT_SIZE }: Props) => {
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

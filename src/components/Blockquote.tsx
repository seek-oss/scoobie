import { Box, Heading, Secondary, Stack } from 'braid-design-system';

import type { StackChildrenProps } from '../private/types';

import * as styles from './Blockquote.css';

type Props = StackChildrenProps;

export const Blockquote = ({ children }: Props) => (
  <Box className={styles.quoteBlock} padding="medium">
    <Stack space="medium">{children}</Stack>

    <Box position="absolute" right={0} top={0} userSelect="none" zIndex={0}>
      <Heading component="div" level="2">
        <Secondary>”</Secondary>
      </Heading>
    </Box>
  </Box>
);

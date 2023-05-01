import { Box, Stack } from 'braid-design-system';
import React, { type FunctionComponent } from 'react';

import { SIZE_TO_SPACE, type Size } from './size';
import type { StackChildrenProps } from './types';

import * as styles from './Wrapper.css';

export type WrapperComponent = FunctionComponent<StackChildrenProps>;

type WrapperProps = StackChildrenProps & {
  component?: WrapperComponent;
  size: Size;
};

export const Wrapper = ({
  children,
  component: Component,
  size,
}: WrapperProps) => {
  const space = SIZE_TO_SPACE[size];

  return (
    <Box className={styles.wrapper}>
      <Stack space={space}>
        {typeof Component === 'undefined' ? (
          children
        ) : (
          <Component>{children}</Component>
        )}
      </Stack>
    </Box>
  );
};

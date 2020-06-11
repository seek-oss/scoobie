import { Box, Stack } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { SIZE_TO_SPACE, Size } from './size';
import { StackChildrenProps } from './types';

import * as styleRefs from './Wrapper.treat';

export type WrapperComponent = React.FunctionComponent<StackChildrenProps>;

type WrapperProps = StackChildrenProps & {
  component?: WrapperComponent;
  size: Size;
};

export const Wrapper = ({
  children,
  component: Component,
  size,
}: WrapperProps) => {
  const styles = useStyles(styleRefs);

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

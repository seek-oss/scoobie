import { Box, Stack } from 'braid-design-system';
import React from 'react';
import { useStyles } from 'sku/react-treat';

import { StackChildrenProps } from './types';

import * as styleRefs from './Wrapper.treat';

export type WrapperComponent = React.FunctionComponent<StackChildrenProps>;

type WrapperProps = StackChildrenProps & {
  component?: WrapperComponent;
};

export const Wrapper = ({ children, component: Component }: WrapperProps) => {
  const styles = useStyles(styleRefs);

  return (
    <Box className={styles.wrapper}>
      <Stack space="medium">
        {typeof Component === 'undefined' ? (
          children
        ) : (
          <Component>{children}</Component>
        )}
      </Stack>
    </Box>
  );
};

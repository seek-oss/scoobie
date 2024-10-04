import { Box } from 'braid-design-system';
import React, { Fragment, type ReactNode } from 'react';

import { ScrollableInline } from './ScrollableInline';

import * as styles from './Table.css';

interface BaseTableProps {
  children: ReactNode;
  overflowX?: 'scroll';
  whiteSpace?: 'nowrap';
  width?: 'full';
}

export const BaseTable = ({
  children,
  overflowX,
  whiteSpace,
  width,
}: BaseTableProps) => {
  const Wrapper = overflowX === 'scroll' ? ScrollableInline : Fragment;

  return (
    <Wrapper {...(overflowX === 'scroll' ? { whiteSpace } : {})}>
      <Box
        component="table"
        className={{
          [styles.table]: true,
          [styles.fullWidth]: width === 'full',
        }}
      >
        {children}
      </Box>
    </Wrapper>
  );
};

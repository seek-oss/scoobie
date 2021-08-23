import { Box } from 'braid-design-system';
import React, { Fragment, ReactNode } from 'react';

import * as styles from './InlineCode.css';

const isHexColour = (value: unknown): value is string =>
  typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value);

interface Props {
  children: ReactNode;
  weight?: 'regular' | 'weak';
}

export const InlineCode = ({ children, weight = 'regular' }: Props) => (
  <Fragment>
    {isHexColour(children) ? (
      <Box component="span" className={styles.colourBlockWrapper}>
        <Box
          borderRadius="large"
          className={[
            styles.base,
            styles.colourBlock,
            styles.weightBorder[weight],
          ]}
          component="span"
          display="inlineBlock"
          height="full"
          style={{ backgroundColor: children }}
        >
          {' '}
        </Box>{' '}
      </Box>
    ) : undefined}

    <Box
      borderRadius="large"
      className={[
        styles.base,
        styles.weight[weight],
        styles.weightBorder[weight],
      ]}
      component="code"
    >
      {children}
    </Box>
  </Fragment>
);

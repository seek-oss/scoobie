import { createStyleObject, getCapHeight } from '@capsizecss/core';
import { styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from 'braid-design-system/css';

import { Size } from '../src/private/size';

import { monospaceFontFamily } from '.';

// Roboto Mono metrics from seek-oss.github.io/capsize
const monospaceFontMetrics = {
  capHeight: 1456,
  ascent: 2146,
  descent: -555,
  lineGap: 0,
  unitsPerEm: 2048,
};

/**
 * A hardcoded subset of Braid tokens for monospace font styling.
 *
 * This is loosely based on the APAC theme.
 *
 * {@link https://github.com/seek-oss/braid-design-system/blob/50e75cce4af2647efb1cfaf8dbd713a228de8692/lib/themes/baseTokens/apac.ts#L47}
 */
const tokens = {
  grid: 4,
  typography: {
    code: {
      // Matches `small` text
      standard: {
        mobile: {
          fontSize: 14,
          rows: 5,
        },
        tablet: {
          fontSize: 14,
          rows: 5,
        },
      },
      // Matches `standard` text
      large: {
        mobile: {
          fontSize: 16,
          rows: 6,
        },
        tablet: {
          fontSize: 16,
          rows: 6,
        },
      },
    },
  },
};

const monospaceFontStylesForTarget = (
  size: Size,
  target: 'mobile' | 'tablet',
) =>
  createStyleObject({
    capHeight: getCapHeight({
      fontSize: tokens.typography.code[size][target].fontSize,
      fontMetrics: monospaceFontMetrics,
    }),
    fontMetrics: monospaceFontMetrics,
    leading: tokens.typography.code[size][target].rows * tokens.grid,
  });

export const code = styleVariants(
  { standard: null, large: null },
  (_, size) => ({
    fontFamily: monospaceFontFamily,

    ...responsiveStyle({
      mobile: monospaceFontStylesForTarget(size, 'mobile'),
      tablet: monospaceFontStylesForTarget(size, 'tablet'),
    }),
  }),
);

import { createStyleObject, getCapHeight } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { responsiveStyle } from 'braid-design-system/css';

// SEEK's former font + GitHub defaults
export const monospaceFontFamily =
  "'Roboto Mono',SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace";

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
      mobile: {
        fontSize: 14,
        rows: 5,
      },
      tablet: {
        fontSize: 14,
        rows: 5,
      },
    },
  },
};

const monospaceFontStylesForTarget = (target: 'mobile' | 'tablet') =>
  createStyleObject({
    capHeight: getCapHeight({
      fontSize: tokens.typography.code[target].fontSize,
      fontMetrics: monospaceFontMetrics,
    }),
    fontMetrics: monospaceFontMetrics,
    leading: tokens.typography.code[target].rows * tokens.grid,
  });

export const code = style({
  fontFamily: monospaceFontFamily,

  ...responsiveStyle({
    mobile: monospaceFontStylesForTarget('mobile'),
    tablet: monospaceFontStylesForTarget('tablet'),
  }),
});

import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';
import { darken } from 'polished';

import { codeBackgroundColor, monospaceFontFamily } from '../../styles';

export const base = style({
  fontFamily: monospaceFontFamily,
  // TODO: obtain capHeight from parent Text
  fontSize: '0.9em',
  lineHeight: 'normal',
});

export const colourBlock = style({
  minWidth: calc.multiply(vars.grid, 5),
});

export const colourBlockWrapper = style({
  userSelect: 'none',
  whiteSpace: 'pre-wrap',
});

export const weightBorder = styleVariants({
  regular: {
    borderColor: darken(0.05, codeBackgroundColor),
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.standard,
  },

  weak: {},
});

export const weight = styleVariants({
  regular: {
    backgroundColor: codeBackgroundColor,
    paddingLeft: vars.space.xxsmall,
    paddingRight: vars.space.xxsmall,
  },

  weak: {},
});

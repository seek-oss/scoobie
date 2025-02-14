import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { colorModeStyle, vars } from 'braid-design-system/css';
import { darken, lighten } from 'polished';

import { codeBackgroundColor } from '../private/color';

import { monospaceFontFamily } from '../private/font.css';

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
  regular: [
    {
      borderStyle: 'solid',
      borderWidth: vars.borderWidth.standard,
    },
    colorModeStyle({
      darkMode: { borderColor: lighten(0.05, codeBackgroundColor.darkMode) },
      lightMode: { borderColor: darken(0.05, codeBackgroundColor.lightMode) },
    }),
  ],

  weak: {},
});

export const weight = styleVariants({
  regular: [
    {
      paddingLeft: vars.space.xxsmall,
      paddingRight: vars.space.xxsmall,
    },
    colorModeStyle({
      darkMode: { backgroundColor: codeBackgroundColor.darkMode },
      lightMode: { backgroundColor: codeBackgroundColor.lightMode },
    }),
  ],

  weak: {},
});

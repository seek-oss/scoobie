import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { colorModeStyle, responsiveStyle, vars } from 'braid-design-system/css';
import { darken, lighten } from 'polished';

import { codeBackgroundColor } from '../private/color';

export const lineNumberContainer = style([
  {
    color: vars.foregroundColor.secondary,
    userSelect: 'none',
  },
  colorModeStyle({
    darkMode: { backgroundColor: lighten(0.05, codeBackgroundColor.darkMode) },
    lightMode: { backgroundColor: darken(0.05, codeBackgroundColor.lightMode) },
  }),
]);

export const codeContainer = style([
  {
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.standard,

    overflow: 'auto',
  },

  colorModeStyle({
    darkMode: {
      backgroundColor: codeBackgroundColor.darkMode,
      borderColor: lighten(0.05, codeBackgroundColor.darkMode),
    },
    lightMode: {
      backgroundColor: codeBackgroundColor.lightMode,
      borderColor: darken(0.05, codeBackgroundColor.lightMode),
    },
  }),

  responsiveStyle({
    mobile: {
      // Roughly 15 lines of code at standard size.
      maxHeight: calc.multiply(vars.grid, 90),
    },
    tablet: {
      // Roughly 30 lines of code at standard size.
      maxHeight: calc.multiply(vars.grid, 172),
    },
  }),
]);

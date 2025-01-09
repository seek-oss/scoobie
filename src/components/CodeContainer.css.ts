import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle, vars } from 'braid-design-system/css';
import { darken } from 'polished';

import { codeBackgroundColor } from '../../styles';

export const lineNumberContainer = style({
  backgroundColor: darken(0.05, codeBackgroundColor),
  borderTopLeftRadius: vars.borderRadius.large,
  borderBottomLeftRadius: vars.borderRadius.large,
  color: vars.foregroundColor.secondary,
  userSelect: 'none',
});

export const codeContainer = style([
  {
    backgroundColor: codeBackgroundColor,
    borderColor: darken(0.05, codeBackgroundColor),
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.standard,

    overflow: 'auto',
  },

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

import { style } from '@vanilla-extract/css';
import { colorModeStyle, vars } from 'braid-design-system/css';

export const quoteBlock = style([
  {
    borderLeftStyle: 'solid',
    borderLeftWidth: vars.space.xxsmall,
    position: 'relative',
  },
  colorModeStyle({
    darkMode: {
      backgroundColor: vars.backgroundColor.neutral,
      borderLeftColor: vars.borderColor.neutral,
    },
    lightMode: {
      backgroundColor: vars.backgroundColor.neutralLight,
      borderLeftColor: vars.borderColor.neutralLight,
    },
  }),
]);

export const quoteMark = style({
  right: vars.space.xxsmall,
  top: vars.space.xxsmall,
});

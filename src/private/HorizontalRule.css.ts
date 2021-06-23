import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const hr = style({
  height: vars.borderWidth.standard,
  backgroundColor: vars.borderColor.standard,
});

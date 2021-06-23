import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const quoteBlock = style({
  borderLeftColor: vars.backgroundColor.neutralLight,
  borderLeftStyle: 'solid',
  borderLeftWidth: vars.space.xxsmall,
  position: 'relative',
});

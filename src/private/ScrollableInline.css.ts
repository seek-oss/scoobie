import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from 'braid-design-system/css';

export const trimPaddingY = style({
  marginBottom: calc.negate(vars.space.small),
  marginTop: calc.negate(vars.space.small),
});

export const scrollX = style({
  flexWrap: 'nowrap',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',

  WebkitOverflowScrolling: 'touch',
});

export const whiteSpace = styleVariants(
  { undefined, nowrap: 'nowrap' } as const,
  (value) => ({ whiteSpace: value }),
);

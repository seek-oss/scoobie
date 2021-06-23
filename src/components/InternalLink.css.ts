import { style } from '@vanilla-extract/css';

export const reset = style({
  color: 'inherit',
  textDecoration: 'none',
  ':visited': {
    color: 'inherit',
  },
});

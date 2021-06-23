import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const headingSpacer = style({
  marginTop: vars.space.small,
  selectors: {
    ':first-child > &': {
      marginTop: 0,
    },
  },
});

export const headingAnchor = style({
  visibility: 'hidden',
  selectors: {
    [`${headingSpacer}:hover &, ${headingSpacer}:focus &`]: {
      visibility: 'visible',
    },
  },
});

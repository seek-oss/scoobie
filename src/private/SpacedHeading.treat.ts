import { style } from 'sku/treat';

export const headingSpacer = style((theme) => ({
  marginTop: theme.space.small * theme.grid,
  selectors: {
    ':first-child > &': {
      marginTop: 0,
    },
  },
}));

export const headingAnchor = style({
  visibility: 'hidden',
  selectors: {
    [`${headingSpacer}:hover &, ${headingSpacer}:focus &`]: {
      visibility: 'visible',
    },
  },
});

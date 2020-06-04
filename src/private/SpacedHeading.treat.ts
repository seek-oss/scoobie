import { style } from 'sku/treat';

export const headingSpacer = style((theme) => ({
  marginTop: theme.space.small * theme.grid,
  selectors: {
    ':first-child > &': {
      marginTop: 0,
    },
  },
}));

export const headingAnchor = style((theme) => ({
  color: 'inherit',
  textDecoration: 'none',
  visibility: 'hidden',
  ':hover': {
    color: theme.color.foreground.linkHover,
  },
  selectors: {
    [`${headingSpacer}:hover &, ${headingSpacer}:focus &`]: {
      visibility: 'visible',
    },
  },
}));

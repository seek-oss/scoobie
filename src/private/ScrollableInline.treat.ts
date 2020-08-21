import { style } from 'sku/treat';

export const trimPaddingY = style((theme) => ({
  marginBottom: -theme.grid * theme.space.small,
  marginTop: -theme.grid * theme.space.small,
}));

export const scrollX = style({
  flexWrap: 'nowrap',
  overflowX: 'auto',
  overflowY: 'hidden',
  scrollbarWidth: 'none',
  whiteSpace: 'nowrap',

  WebkitOverflowScrolling: 'touch',
});

import { style } from 'sku/treat';

export const quoteBlock = style((theme) => ({
  ':before': {
    color: theme.color.background.neutral,
    content: "'”'",
    fontFamily: theme.typography.fontFamily,
    fontSize: '2em',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  borderLeftColor: theme.color.background.neutralLight,
  borderLeftStyle: 'solid',
  borderLeftWidth: theme.grid * theme.space.xxsmall,
  position: 'relative',
}));

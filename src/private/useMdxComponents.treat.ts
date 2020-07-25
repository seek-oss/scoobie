import { style } from 'sku/treat';

export const pre = style({
  margin: 0,
});

export const table = style({
  borderCollapse: 'separate',
  borderSpacing: 0,
});

export const tableWrapper = style({
  overflowX: 'auto',
});

export const tableRow = style((theme) => ({
  selectors: {
    '&:nth-child(even)': {
      backgroundColor: theme.color.background.body,
    },
  },
}));

export const tableCell = style((theme) => ({
  borderBottomWidth: 1,
  borderColor: theme.border.color.standard,
  borderRightWidth: 1,
  borderStyle: 'solid',
  verticalAlign: 'top',

  ':first-child': {
    borderLeftWidth: 1,
  },
}));

export const td = style((theme) => ({
  selectors: {
    'tr:last-child &:first-child': {
      borderBottomLeftRadius: theme.border.radius.standard,
    },
    'tr:last-child &:last-child': {
      borderBottomRightRadius: theme.border.radius.standard,
    },
  },
}));

export const th = style((theme) => ({
  selectors: {
    'tr:first-child &': {
      borderTopWidth: 1,
    },
    'tr:first-child &:first-child': {
      borderTopLeftRadius: theme.border.radius.standard,
    },
    'tr:first-child &:last-child': {
      borderTopRightRadius: theme.border.radius.standard,
    },
  },
}));

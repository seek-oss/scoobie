import { darken } from 'polished';
import { Style, style, styleMap } from 'sku/treat';

import { monospaceFontFamily } from '../styles';

import { SIZES, SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

export const image = style({
  maxWidth: '100%',
});

export const inlineCode = style((theme) => ({
  backgroundColor: theme.color.background.body,
  borderColor: darken(0.05, theme.color.background.body),
  borderStyle: 'solid',
  borderWidth: 1,

  fontFamily: monospaceFontFamily,
  fontSize: '0.9em',
}));

export const listGrid = styleMap<Size>((theme) =>
  SIZES.reduce<Record<Size, Style>>((acc, size) => {
    acc[size] = {
      display: 'grid',
      gridColumnGap: theme.grid * theme.space[SIZE_TO_PADDING[size]],
      gridRowGap: theme.grid * theme.space[SIZE_TO_SPACE[size]],
      gridTemplateColumns: 'min-content minmax(0, 1fr)',
    };

    return acc;
  }, {} as Record<Size, Style>),
);

export const orderedList = style({
  counterReset: 'ol',
});

export const unorderedList = style({
  counterReset: 'ol',
});

export const listItem = style({
  display: 'list-item',
  textAlign: 'right',
  selectors: {
    [`${orderedList} > span > &, ${orderedList} > div > div > span > &:before`]: {
      counterIncrement: 'ol',
    },
    [`${orderedList} > span > &:before, ${orderedList} > div > div > span > &:before`]: {
      content: "counter(ol) '.'",
    },
    [`${unorderedList} > span > &:before, ${unorderedList} > div > div > span > &:before`]: {
      content: "'•'",
    },
  },
});

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

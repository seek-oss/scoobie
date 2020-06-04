import { style } from 'sku/treat';

import {
  alternateRowBackgroundColour,
  codeBackgroundColor,
  monospaceFontFamily,
} from '../styles';

export const image = style({
  maxWidth: '100%',
});

export const inlineCode = style({
  backgroundColor: codeBackgroundColor,

  fontFamily: monospaceFontFamily,
  fontSize: '0.9em',
});

export const listGrid = style((theme) => ({
  display: 'grid',
  gridColumnGap: theme.grid * theme.space.small,
  gridRowGap: theme.grid * theme.space.medium,
  gridTemplateColumns: 'min-content minmax(0, 1fr)',
}));

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
  borderCollapse: 'collapse',
});

export const tableRow = style({
  selectors: {
    '&:nth-child(even)': {
      backgroundColor: alternateRowBackgroundColour,
    },
  },
});

export const tableCell = style((theme) => ({
  borderColor: theme.color.background.neutral,
  borderStyle: 'solid',
  borderWidth: 1,
  verticalAlign: 'top',
}));

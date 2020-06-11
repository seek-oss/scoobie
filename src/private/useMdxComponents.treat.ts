import { Style, style, styleMap } from 'sku/treat';

import {
  alternateRowBackgroundColour,
  codeBackgroundColor,
  monospaceFontFamily,
} from '../styles';

import { SIZES, SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

export const image = style({
  maxWidth: '100%',
});

export const inlineCode = style({
  backgroundColor: codeBackgroundColor,

  fontFamily: monospaceFontFamily,
  fontSize: '0.9em',
});

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

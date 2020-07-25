import { Style, style, styleMap } from 'sku/treat';

import { SIZES, SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

export const listTable = style({
  borderCollapse: 'separate',
  borderSpacing: 0,
  display: 'table',
});

export const listTableRow = style({
  display: 'table-row',
});

export const listTableCell = styleMap<Size>((theme) =>
  SIZES.reduce<Record<Size, Style>>((acc, size) => {
    acc[size] = {
      borderBottomColor: 'transparent',
      borderBottomStyle: 'solid',
      borderBottomWidth: theme.grid * theme.space[SIZE_TO_SPACE[size]],
      borderRightColor: 'transparent',
      borderRightStyle: 'solid',
      borderRightWidth: theme.grid * theme.space[SIZE_TO_PADDING[size]],
      display: 'table-cell',
      overflowWrap: 'anywhere',
      verticalAlign: 'top',

      selectors: {
        '&:first-child': {
          whiteSpace: 'nowrap',
        },
        '&:last-child': {
          borderRightWidth: 0,
        },
        'li:last-child > &': {
          borderBottomWidth: 0,
        },
      },
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
    [`${orderedList} > li > div > span > &, ${orderedList} > div > div > li > div > span > &:before`]: {
      counterIncrement: 'ol',
    },
    [`${orderedList} > li > div > span > &:before, ${orderedList} > div > div > li > div > span > &:before`]: {
      content: "counter(ol) '.'",
    },
    [`${unorderedList} > li > div > span > &:before, ${unorderedList} > div > div > li > div > span > &:before`]: {
      content: "'•'",
    },
    [`${unorderedList} > li > div > span > &, ${unorderedList} > div > div > li > div > span > &`]: {
      transform: 'scale(1.25)',
    },
  },
});

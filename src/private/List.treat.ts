import { Style, style, styleMap } from 'sku/treat';

import { SIZES, SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

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
    [`${unorderedList} > span > &, ${unorderedList} > div > div > span > &`]: {
      transform: 'scale(1.25)',
    },
  },
});

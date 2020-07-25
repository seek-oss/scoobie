import { Style, style, styleMap } from 'sku/treat';

import { SIZES, SIZE_TO_PADDING, SIZE_TO_SPACE, Size } from './size';

const COUNTER_NAME = 'scoobie-ordered-list';

export const bulletColor = style({
  backgroundColor: 'currentColor',
});

export const bulletSize = {
  standard: style({
    width: 4,
    height: 4,
  }),
  large: style({
    width: 5,
    height: 5,
  }),
};

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
  counterReset: COUNTER_NAME,
});

export const unorderedList = style({
  counterReset: COUNTER_NAME,
});

export const listItem = style({
  display: 'list-item',
  textAlign: 'right',
});

export const orderedListItem = style({
  counterIncrement: COUNTER_NAME,

  ':before': {
    content: `counter(${COUNTER_NAME}) '.'`,
  },
});

export const unorderedListItem = styleMap<Size>((theme) =>
  SIZES.reduce<Record<Size, Style>>((acc, size) => {
    acc[size] = theme.utils.responsiveStyle({
      mobile: {
        height: theme.grid * theme.typography.text[size].mobile.rows,
      },
      tablet: {
        height: theme.grid * theme.typography.text[size].tablet.rows,
      },
    });

    return acc;
  }, {} as Record<Size, Style>),
);

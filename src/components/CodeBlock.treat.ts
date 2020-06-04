import { style } from 'sku/treat';

import { codeBackgroundColor, monospaceFontFamily } from '../styles';

export const codeBlock = style({});

export const codeTag = style({
  fontFamily: monospaceFontFamily,
});

export const buttonOuter = style((theme) =>
  theme.utils.responsiveStyle({
    desktop: {
      opacity: 0,
      ':hover': {
        cursor: 'pointer',
      },
      selectors: {
        [`${codeBlock}:hover &`]: {
          opacity: 1,
        },
      },
    },
    mobile: {
      opacity: 1,
    },
  }),
);

export const buttonInner = style((theme) =>
  theme.utils.responsiveStyle({
    desktop: {
      opacity: 0.5,
      selectors: {
        [`${buttonOuter}:hover &`]: {
          opacity: 1,
        },
      },
    },
    mobile: {
      opacity: 1,
    },
  }),
);

export const preTag = style((theme) => ({
  backgroundColor: codeBackgroundColor,
  // this is super arbitrary at the moment
  maxHeight: theme.grid * theme.typography.text.small.tablet.size * 10,
  overflow: 'auto',
}));

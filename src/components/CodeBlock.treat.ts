import { darken } from 'polished';
import { style } from 'sku/treat';

import { monospaceFontFamily } from '../styles';

export const codeBlock = style({});

export const lineNumberBox = style((theme) => ({
  backgroundColor: darken(0.05, theme.color.background.body),
  borderTopLeftRadius: theme.border.radius.standard,
  borderBottomLeftRadius: theme.border.radius.standard,
}));

export const lineNumberContainer = style((theme) => ({
  color: theme.color.foreground.secondary,
  fontFamily: monospaceFontFamily,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  userSelect: 'none',
}));

export const codeTag = style({
  fontFamily: monospaceFontFamily,
});

export const buttonOuter = style((theme) => ({
  borderColor: darken(0.05, theme.color.background.body),
  borderStyle: 'solid',
  borderWidth: 1,
  ':hover': {
    cursor: 'pointer',
  },

  ...theme.utils.responsiveStyle({
    desktop: {
      opacity: 0,
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
}));

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
  backgroundColor: theme.color.background.body,
  borderColor: darken(0.05, theme.color.background.body),
  borderStyle: 'solid',
  borderWidth: 1,
  // this is super arbitrary at the moment
  maxHeight: theme.grid * theme.typography.text.small.tablet.size * 10,
  overflow: 'auto',
}));

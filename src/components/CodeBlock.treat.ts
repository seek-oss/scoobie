import { darken } from 'polished';
import { Style, style, styleMap } from 'sku/treat';
import { Theme } from 'treat/theme';

import { CODE_SIZES, CodeSize } from '../private/size';
import { monospaceFontStyles } from '../styles';

export const lineNumberContainer = style((theme) => ({
  backgroundColor: darken(0.05, theme.color.background.body),
  borderTopLeftRadius: theme.border.radius.standard,
  borderBottomLeftRadius: theme.border.radius.standard,
  color: theme.color.foreground.secondary,
  userSelect: 'none',
}));

export const code = styleMap<CodeSize>((theme) => ({
  small: monospaceFontStyles(theme, 'small'),
  standard: monospaceFontStyles(theme, 'standard'),
}));

const fit30LinesOfCode = (theme: Theme, codeSize: CodeSize) =>
  theme.utils.responsiveStyle({
    mobile: {
      maxHeight:
        theme.border.width.standard * 2 +
        theme.grid * theme.space.medium * 2 +
        theme.typography.text[codeSize].mobile.capHeight * 30 +
        theme.grid * theme.space.small * 29,
    },
    tablet: {
      maxHeight:
        theme.border.width.standard * 2 +
        theme.grid * theme.space.medium * 2 +
        theme.typography.text[codeSize].tablet.capHeight * 30 +
        theme.grid * theme.space.small * 29,
    },
  });

export const codeContainer = styleMap<CodeSize>((theme) =>
  CODE_SIZES.reduce<Record<CodeSize, Style>>((acc, codeSize) => {
    acc[codeSize] = {
      backgroundColor: theme.color.background.body,
      borderColor: darken(0.05, theme.color.background.body),
      borderStyle: 'solid',
      borderWidth: theme.border.width.standard,

      overflow: 'auto',

      ...fit30LinesOfCode(theme, codeSize),
    };

    return acc;
  }, {} as Record<CodeSize, Style>),
);

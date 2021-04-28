import { darken } from 'polished';
import { style } from 'sku/treat';

import { monospaceFontFamily } from '../styles';

export const base = style({
  fontFamily: monospaceFontFamily,
  // TODO: obtain capHeight from parent Text
  fontSize: '0.9em',
  lineHeight: 'normal',
});

export const weight = {
  regular: style((theme) => ({
    backgroundColor: theme.color.background.body,
    borderColor: darken(0.05, theme.color.background.body),
    borderStyle: 'solid',
    borderWidth: theme.border.width.standard,

    paddingLeft: theme.grid * theme.space.xxsmall,
    paddingRight: theme.grid * theme.space.xxsmall,
  })),

  weak: style({}),
};

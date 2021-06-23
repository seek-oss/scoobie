import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';
import { darken } from 'polished';

import { codeBackgroundColor, monospaceFontFamily } from '../../styles';

export const base = style({
  fontFamily: monospaceFontFamily,
  // TODO: obtain capHeight from parent Text
  fontSize: '0.9em',
  lineHeight: 'normal',
});

export const weight = {
  regular: style({
    backgroundColor: codeBackgroundColor,
    borderColor: darken(0.05, codeBackgroundColor),
    borderStyle: 'solid',
    borderWidth: vars.borderWidth.standard,

    paddingLeft: vars.space.xxsmall,
    paddingRight: vars.space.xxsmall,
  }),

  weak: style({}),
};

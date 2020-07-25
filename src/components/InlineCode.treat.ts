import { darken } from 'polished';
import { style } from 'sku/treat';

import { monospaceFontFamily } from '../styles';

export const inlineCode = style((theme) => ({
  backgroundColor: theme.color.background.body,
  borderColor: darken(0.05, theme.color.background.body),
  borderStyle: 'solid',
  borderWidth: 1,

  fontFamily: monospaceFontFamily,
  fontSize: '0.9em',
  lineHeight: 'normal',
}));

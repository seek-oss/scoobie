import { composeStyles, style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

const atomStyle = atoms({
  borderRadius: 'large',
  display: 'block',
});

const rawStyle = style({
  borderColor: vars.borderColor.neutralLight,
  borderWidth: vars.borderWidth.standard,
  borderStyle: 'solid',
});

export const img = composeStyles(atomStyle, rawStyle);

import { composeStyles, style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

const atomStyle = atoms({
  borderRadius: 'large',
  boxShadow: 'small',
  display: 'block',
});

const rawStyle = style({
  borderColor: vars.borderColor.standard,
  borderWidth: vars.borderWidth.standard,
  borderStyle: 'solid',
  maxWidth: '100%',
});

export const img = composeStyles(atomStyle, rawStyle);

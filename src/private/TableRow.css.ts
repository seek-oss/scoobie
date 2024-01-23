import { style, styleVariants } from '@vanilla-extract/css';

import { codeBackgroundColor } from '../../styles';

export const tableRow = styleVariants({
  stripe: {
    selectors: {
      'tbody &:nth-child(odd)': {
        backgroundColor: codeBackgroundColor,
      },
    },
  },
  subtle: {},
});

export const tableRowSelection = style({});

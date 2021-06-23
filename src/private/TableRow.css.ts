import { styleVariants } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const tableRow = styleVariants({
  stripe: {
    selectors: {
      'tbody &:nth-child(odd)': {
        backgroundColor: vars.backgroundColor.body,
      },
    },
  },
  subtle: {},
});

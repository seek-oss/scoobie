import { styleVariants } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const tableCell = styleVariants({
  stripe: {
    borderBottomWidth: vars.borderWidth.standard,
    borderColor: vars.borderColor.standard,
    borderRightWidth: vars.borderWidth.standard,
    borderStyle: 'solid',
    verticalAlign: 'top',

    ':first-child': {
      borderLeftWidth: vars.borderWidth.standard,
    },
  },
  subtle: {
    borderBottomWidth: vars.borderWidth.standard,
    borderColor: vars.borderColor.standard,
    borderStyle: 'solid',
    verticalAlign: 'top',

    ':first-child': {
      paddingLeft: 0,
    },

    ':last-child': {
      paddingRight: 0,
    },
  },
});

export const td = styleVariants({
  stripe: {
    selectors: {
      'tr:last-child &:first-child': {
        borderBottomLeftRadius: vars.borderRadius.standard,
      },
      'tr:last-child &:last-child': {
        borderBottomRightRadius: vars.borderRadius.standard,
      },
    },
  },
  subtle: {
    selectors: {
      'tr:last-child &': {
        borderBottomWidth: 0,
        paddingBottom: 0,
      },
    },
  },
});

export const th = styleVariants({
  stripe: {
    selectors: {
      'tr:first-child &': {
        borderTopWidth: 1,
      },
      'tr:first-child &:first-child': {
        borderTopLeftRadius: vars.borderRadius.standard,
      },
      'tr:first-child &:last-child': {
        borderTopRightRadius: vars.borderRadius.standard,
      },
    },
  },
  subtle: {
    selectors: {
      'tr:first-child &': {
        paddingTop: 0,
      },
      'tr:last-child &': {
        borderBottomColor: vars.borderColor.field,
        borderBottomWidth: vars.borderWidth.large,
      },
    },
  },
});

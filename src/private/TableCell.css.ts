import { styleVariants } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

import { SIZE_TO_TABLE_PADDING, type Size } from './size';

import { tableRowSelection } from './TableRow.css';

export const tableCell = styleVariants({
  stripe: {
    borderBottomWidth: vars.borderWidth.standard,
    borderColor: vars.borderColor.neutralLight,
    borderRightWidth: vars.borderWidth.standard,
    borderStyle: 'solid',
    verticalAlign: 'top',

    ':first-child': {
      borderLeftWidth: vars.borderWidth.standard,
    },
  },
  subtle: {
    borderBottomWidth: vars.borderWidth.standard,
    borderColor: vars.borderColor.neutralLight,
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

const tdForSize = (size: Size) =>
  styleVariants({
    stripe: {
      selectors: {
        [`${tableRowSelection} &:first-child`]: {
          borderLeftColor: vars.borderColor.focus,
          borderLeftWidth: vars.borderWidth.large,
        },
        [`${tableRowSelection} &:last-child`]: {
          borderRightColor: vars.borderColor.focus,
          borderRightWidth: vars.borderWidth.large,
        },
        'tr:last-child &:first-child': {
          borderBottomLeftRadius: vars.borderRadius.large,
        },
        'tr:last-child &:last-child': {
          borderBottomRightRadius: vars.borderRadius.large,
        },
      },
    },
    subtle: {
      selectors: {
        [`${tableRowSelection} &:first-child`]: {
          borderLeftColor: vars.borderColor.focus,
          borderLeftWidth: vars.borderWidth.large,
          borderLeftStyle: 'solid',
          paddingLeft: vars.space[SIZE_TO_TABLE_PADDING[size]],
        },
        [`${tableRowSelection} &:last-child`]: {
          borderRightColor: vars.borderColor.focus,
          borderRightWidth: vars.borderWidth.large,
          borderRightStyle: 'solid',
          paddingRight: vars.space[SIZE_TO_TABLE_PADDING[size]],
        },
        'tr:last-child &': {
          borderBottomWidth: 0,
          paddingBottom: 0,
        },
      },
    },
  });

export const td = {
  large: tdForSize('large'),
  standard: tdForSize('standard'),
};

export const th = styleVariants({
  stripe: {
    selectors: {
      'tr:first-child &': {
        borderTopWidth: 1,
      },
      'tr:first-child &:first-child': {
        borderTopLeftRadius: vars.borderRadius.large,
      },
      'tr:first-child &:last-child': {
        borderTopRightRadius: vars.borderRadius.large,
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

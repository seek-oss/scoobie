import { styleMap } from 'sku/treat';

import { TableType } from './TableContext';

export const tableCell = styleMap<TableType>((theme) => ({
  stripe: {
    borderBottomWidth: theme.border.width.standard,
    borderColor: theme.border.color.standard,
    borderRightWidth: theme.border.width.standard,
    borderStyle: 'solid',
    verticalAlign: 'top',

    ':first-child': {
      borderLeftWidth: theme.border.width.standard,
    },
  },
  subtle: {
    borderBottomWidth: theme.border.width.standard,
    borderColor: theme.border.color.standard,
    borderStyle: 'solid',
    verticalAlign: 'top',

    ':first-child': {
      paddingLeft: 0,
    },

    ':last-child': {
      paddingRight: 0,
    },
  },
}));

export const td = styleMap<TableType>((theme) => ({
  stripe: {
    selectors: {
      'tr:last-child &:first-child': {
        borderBottomLeftRadius: theme.border.radius.standard,
      },
      'tr:last-child &:last-child': {
        borderBottomRightRadius: theme.border.radius.standard,
      },
    },
  },
  subtle: {},
}));

export const th = styleMap<TableType>((theme) => ({
  stripe: {
    selectors: {
      'tr:first-child &': {
        borderTopWidth: 1,
      },
      'tr:first-child &:first-child': {
        borderTopLeftRadius: theme.border.radius.standard,
      },
      'tr:first-child &:last-child': {
        borderTopRightRadius: theme.border.radius.standard,
      },
    },
  },
  subtle: {
    selectors: {
      'tr:last-child &': {
        borderBottomColor: theme.border.color.field,
        borderBottomWidth: theme.border.width.large,
      },
    },
  },
}));

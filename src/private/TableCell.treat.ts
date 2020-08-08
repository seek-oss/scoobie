import { styleMap } from 'sku/treat';

import { TableType } from './TableContext';

export const tableCell = styleMap<TableType>((theme) => ({
  stripe: {
    borderBottomWidth: 1,
    borderColor: theme.border.color.standard,
    borderRightWidth: 1,
    borderStyle: 'solid',
    verticalAlign: 'top',

    ':first-child': {
      borderLeftWidth: 1,
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
}));

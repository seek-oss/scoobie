import { styleMap } from 'sku/treat';

import { TableType } from '../private/TableContext';

export const tableRow = styleMap<TableType>((theme) => ({
  stripe: {
    selectors: {
      'tbody &:nth-child(odd)': {
        backgroundColor: theme.color.background.body,
      },
    },
  },
  subtle: {},
}));

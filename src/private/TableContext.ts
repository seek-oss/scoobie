import { createContext } from 'react';

import { DEFAULT_SIZE, type Size } from './size';

interface TableContextValue {
  align?: readonly TableAlign[];
  component: TableCellComponent;
  size: Size;
  type: TableType;
}

export type TableAlign = 'left' | 'center' | 'right';

type TableCellComponent = 'td' | 'th';

export type TableType = 'stripe' | 'subtle';

export const DEFAULT_TABLE_CELL_COMPONENT: TableCellComponent = 'td';

export const DEFAULT_TABLE_TYPE: TableType = 'stripe';

export const TableContext = createContext<TableContextValue>({
  component: DEFAULT_TABLE_CELL_COMPONENT,
  size: DEFAULT_SIZE,
  type: DEFAULT_TABLE_TYPE,
});

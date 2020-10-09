import { createContext } from 'react';

interface ListContextValue {
  type: 'alpha' | 'number';
}

export const ListContext = createContext<ListContextValue>({
  type: 'number',
});

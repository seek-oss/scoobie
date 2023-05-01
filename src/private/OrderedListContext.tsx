import React, { type ReactNode, createContext, useContext } from 'react';

const LIST_TYPES = ['number', 'alpha', 'roman'] as const;

const DEFAULT_LIST_TYPE = LIST_TYPES[0];

type ListType = typeof LIST_TYPES[number];

const nextListType = (type: ListType): ListType =>
  LIST_TYPES[LIST_TYPES.indexOf(type) + 1] ?? DEFAULT_LIST_TYPE;

const ListContext = createContext<ListType>(DEFAULT_LIST_TYPE);

interface OrderedListProviderProps {
  children: ReactNode;
}

export const useOrderedListContext = () => {
  const type = useContext(ListContext);

  return {
    NextOrderedListProvider: ({ children }: OrderedListProviderProps) => (
      <ListContext.Provider value={nextListType(type)}>
        {children}
      </ListContext.Provider>
    ),
    type,
  };
};

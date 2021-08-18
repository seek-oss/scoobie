import React, { createContext, useContext } from 'react';
import { ReactNode } from 'react';

const ctx = createContext<string | undefined>(undefined);

interface Props {
  children: ReactNode;
  value: string | undefined;
}

export const GraphQLPlaygroundProvider = ({ children, value }: Props) => (
  <ctx.Provider value={value}>{children}</ctx.Provider>
);

export const useGraphQLPlayground = () => useContext(ctx);

import React, { useContext } from 'react';

const ctx = React.createContext<string | undefined>(undefined);

export const GraphQLPlaygroundProvider: React.FunctionComponent<{
  value: string | undefined;
}> = ({ children, value }) => (
  <ctx.Provider value={value}>{children}</ctx.Provider>
);

export const useGraphQLPlayground = () => useContext(ctx);

import { type ReactNode, createContext, useContext } from 'react';

interface ScoobieLinkContext {
  propagateSearchParams: string[];
}

const ctx = createContext<ScoobieLinkContext>({
  propagateSearchParams: ['v'],
});

interface ScoobieLinkProviderProps {
  children: ReactNode;

  /**
   * The search parameters to propagate on internal links.
   *
   * This defaults to `['v']` in the absence of a `ScoobieLinkProvider`.
   */
  propagateSearchParams: string[];
}

export const ScoobieLinkProvider = ({
  children,
  ...value
}: ScoobieLinkProviderProps) => (
  <ctx.Provider value={value}>{children}</ctx.Provider>
);

export const useScoobieLink = () => useContext(ctx);

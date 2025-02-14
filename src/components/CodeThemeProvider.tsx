import { type ReactNode, createContext, useContext } from 'react';

import type { CodeTheme } from '../private/codeThemes';

const ctx = createContext<CodeTheme>('scoobieLight');

interface CodeThemeProviderProps {
  children: ReactNode;

  /**
   * The current code theme.
   *
   * This defaults to `scoobieLight` in the absence of a `CodeThemeProvider`.
   */
  theme: CodeTheme;
}

export const CodeThemeProvider = ({
  children,
  theme: theme,
}: CodeThemeProviderProps) => (
  <ctx.Provider value={theme}>{children}</ctx.Provider>
);

export const useCodeTheme = (): CodeTheme => useContext(ctx);

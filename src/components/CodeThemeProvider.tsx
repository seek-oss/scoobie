import type { themes } from 'prism-react-renderer';
import { type ReactNode, createContext, useContext } from 'react';

type CodeTheme = keyof typeof themes;

const ctx = createContext<CodeTheme>('github');

interface CodeThemeProviderProps {
  children: ReactNode;

  /**
   * The current color mode.
   *
   * This defaults to `lightMode` in the absence of a `ColorModeProvider`.
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

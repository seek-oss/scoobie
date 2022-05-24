import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';
import React, { ReactNode } from 'react';

import { GraphQLPlaygroundProvider } from '../private/hooks/graphqlPlayground';
import { DEFAULT_SIZE, Size } from '../private/size';
import { useMdxComponents } from '../private/useMdxComponents';

interface MdxProviderProps {
  children: ReactNode;

  /**
   * Optional base URL of a GraphQL Playground
   *
   * This will enable a "Try in Playground" button for GraphQL code blocks
   */
  graphqlPlayground?: string;

  /**
   * Optional scaling factor for text and spacing
   */
  size?: Size;
}

export const MdxProvider = ({
  children,
  graphqlPlayground,
  size = DEFAULT_SIZE,
}: MdxProviderProps) => {
  const components = useMdxComponents({ size });

  return (
    <GraphQLPlaygroundProvider value={graphqlPlayground}>
      {/* `@types/mdx-js__react` does not play nicely with React 18 */}
      <MDXProvider components={components as MDXProviderComponents}>
        {children}
      </MDXProvider>
    </GraphQLPlaygroundProvider>
  );
};

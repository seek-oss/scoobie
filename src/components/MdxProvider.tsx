import { MDXProvider } from '@mdx-js/react';
import React from 'react';

import { GraphQLPlaygroundProvider } from '../private/hooks/graphqlPlayground';
import { useMdxComponents } from '../private/useMdxComponents';

interface MdxProviderProps {
  /**
   * Optional base URL of a GraphQL Playground
   *
   * This will enable a "Try in Playground" button for GraphQL code blocks
   */
  graphqlPlayground?: string;
}

export const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({
  children,
  graphqlPlayground,
}) => {
  const components = useMdxComponents();

  return (
    <GraphQLPlaygroundProvider value={graphqlPlayground}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </GraphQLPlaygroundProvider>
  );
};

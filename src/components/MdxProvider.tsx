import { MDXProvider } from '@mdx-js/react';
import React, { type ReactNode } from 'react';

import { GraphQLPlaygroundProvider } from '../private/hooks/graphqlPlayground';
import { DEFAULT_SIZE, type Size } from '../private/size';
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

  /**
   * Optional components to use in addition to or in place of the default ones
   */
  components?: MDX.ProviderComponents;
}

export const MdxProvider = ({
  children,
  graphqlPlayground,
  size = DEFAULT_SIZE,
  components: componentOverrides,
}: MdxProviderProps) => {
  const components = useMdxComponents({ size });

  return (
    <GraphQLPlaygroundProvider value={graphqlPlayground}>
      <MDXProvider components={{ ...components, ...componentOverrides }}>
        {children}
      </MDXProvider>
    </GraphQLPlaygroundProvider>
  );
};

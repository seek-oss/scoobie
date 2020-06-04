import React from 'react';

import { CodeBlock } from '../components/CodeBlock';

import { useGraphQLPlayground } from './hooks/graphqlPlayground';

/**
 * Wraps `<CodeBlock>` with our GraphQL Playground URL
 */
export const CodeBlockWithPlayground = ({
  children,
  language,
}: {
  children: string;
  language: string;
}) => {
  const graphqlPlayground = useGraphQLPlayground();

  return (
    <CodeBlock language={language} graphqlPlayground={graphqlPlayground}>
      {children}
    </CodeBlock>
  );
};

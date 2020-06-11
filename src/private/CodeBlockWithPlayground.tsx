import React from 'react';

import { CodeBlock } from '../components/CodeBlock';

import { useGraphQLPlayground } from './hooks/graphqlPlayground';
import { Size } from './size';

/**
 * Wraps `<CodeBlock>` with our GraphQL Playground URL
 */
export const CodeBlockWithPlayground = ({
  children,
  language,
  size,
}: {
  children: string;
  language: string;
  size: Size;
}) => {
  const graphqlPlayground = useGraphQLPlayground();

  return (
    <CodeBlock
      language={language}
      graphqlPlayground={graphqlPlayground}
      size={size}
    >
      {children}
    </CodeBlock>
  );
};

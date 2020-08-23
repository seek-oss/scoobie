import React, { ComponentProps } from 'react';

import { CodeBlock } from '../components/CodeBlock';

import { useGraphQLPlayground } from './hooks/graphqlPlayground';

type Props = ComponentProps<typeof CodeBlock>;

/**
 * Wraps `<CodeBlock>` with our GraphQL Playground URL
 */
export const CodeBlockWithPlayground = (props: Props) => {
  const graphqlPlayground = useGraphQLPlayground();

  return <CodeBlock {...props} graphqlPlayground={graphqlPlayground} />;
};

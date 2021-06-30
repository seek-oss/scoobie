import React from 'react';

import { CodeBlock } from '../components/CodeBlock';
import { CodeChildProps } from '../components/CodeBlock/CodeChild';

import { useGraphQLPlayground } from './hooks/graphqlPlayground';
import { Size } from './size';

const toLabel = (meta?: string) => meta?.match(/label="([^"]+)"/)?.[1];

/**
 * MDAST node as passed through by the `mergeCodeBlocks` Remark plugin.
 *
 * {@link https://github.com/syntax-tree/mdast/blob/main/readme.md#code}
 */
interface MdastCode {
  lang?: string;
  meta?: string;
  value: string;
}

const toCodeChildProps = (node: MdastCode): CodeChildProps => ({
  code: node.value,
  label: toLabel(node.meta),
  language: node.lang ?? undefined,
});

interface Props {
  children: string;
  className?: string;
  metastring?: string;
}

export const createMdxCodeBlock =
  (size: Size) =>
  ({ children, className, metastring }: Props) => {
    const graphqlPlayground = useGraphQLPlayground();

    if (className === 'language-scoobie-merged-code' && metastring) {
      const data = JSON.parse(metastring) as MdastCode[];

      return (
        <CodeBlock graphqlPlayground={graphqlPlayground} size={size}>
          {data.map(toCodeChildProps)}
        </CodeBlock>
      );
    }

    return (
      <CodeBlock
        graphqlPlayground={graphqlPlayground}
        label={toLabel(metastring)}
        language={className?.replace(/^language-/, '')}
        size={size}
      >
        {String(children)}
      </CodeBlock>
    );
  };

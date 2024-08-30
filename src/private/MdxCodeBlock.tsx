import React from 'react';

import { CodeBlock } from '../components/CodeBlock';
import type { CodeChildProps } from '../components/CodeBlock/CodeChild';

import { useGraphQLPlayground } from './hooks/graphqlPlayground';
import type { Size } from './size';

const LABEL_REGEX = /label="([^"]+)"/;

const toDefault = (meta?: string): boolean =>
  Boolean(meta?.replace(LABEL_REGEX, '').match(/(^|\s)default(\s|$)/));

const toLabel = (meta?: string): string | undefined =>
  meta?.match(LABEL_REGEX)?.[1];

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

      const firstDefaultIndex = data.findIndex((child) =>
        toDefault(child.meta),
      );

      const initialIndex = firstDefaultIndex === -1 ? 0 : firstDefaultIndex;

      return (
        <CodeBlock
          graphqlPlayground={graphqlPlayground}
          initialIndex={initialIndex}
          size={size}
        >
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

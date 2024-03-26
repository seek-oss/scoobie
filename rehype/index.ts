// Stolen from https://github.com/remcohaszing/rehype-mdx-code-props/blob/main/src/rehype-mdx-code-props.ts to get back old behaviour of passing meta

import type {
  ExpressionStatement,
  JSXAttribute,
  JSXElement,
  JSXSpreadAttribute,
  Program,
} from 'estree-jsx';
import type { Root } from 'hast';
import { toEstree } from 'hast-util-to-estree';
import type { Plugin } from 'unified';
import { visitParents } from 'unist-util-visit-parents';

/**
 * @internal
 */
declare module 'hast' {
  interface ElementData {
    /**
     * Code meta defined by the mdast.
     */
    meta?: string;
  }
}

type JSXAttributes = Array<JSXAttribute | JSXSpreadAttribute>;

/**
 * Get the JSX attributes for an estree program containing just a single JSX element.
 *
 * @param program
 *   The estree program
 * @returns
 *   The JSX attributes of the JSX element.
 */
function getOpeningAttributes(program: Program): JSXAttributes {
  const { expression } = program.body[0] as ExpressionStatement;
  const { openingElement } = expression as JSXElement;
  return openingElement.attributes;
}

export interface RehypeMdxCodePropsOptions {
  /**
   * The tag name to add the attributes to.
   *
   * @default 'pre'
   */
  tagName?: 'code' | 'pre';
}

/**
 * An MDX rehype plugin for transforming markdown code meta into JSX props.
 */
const rehypeMdxCodeProps: Plugin<[RehypeMdxCodePropsOptions?], Root> = ({
  tagName = 'pre',
} = {}) => {
  if (tagName !== 'code' && tagName !== 'pre') {
    throw new Error(`Expected tagName to be 'code' or 'pre', got: ${tagName}`);
  }

  return (ast) => {
    visitParents(ast, 'element', (node, ancestors) => {
      if (node.tagName !== 'code') {
        return;
      }

      const meta = node.data?.meta;
      if (typeof meta !== 'string') {
        return;
      }

      if (!meta) {
        return;
      }

      let child = node;
      let parent = ancestors.at(-1)!;

      if (tagName === 'pre') {
        if (parent.type !== 'element') {
          return;
        }

        if (parent.tagName !== 'pre') {
          return;
        }

        if (parent.children.length !== 1) {
          return;
        }

        child = parent;
        parent = ancestors.at(-2)!;
      }

      const attribute: JSXAttribute = {
        type: 'JSXAttribute',
        name: { type: 'JSXIdentifier', name: 'meta' },
        value: {
          type: 'Literal',
          value: meta,
        },
      };

      const estree = toEstree(child);
      getOpeningAttributes(estree).push(attribute);

      parent.children[parent.children.indexOf(child)] = {
        type: 'mdxFlowExpression',
        value: '',
        data: { estree },
      };
    });
  };
};

export const rehypePlugins = [rehypeMdxCodeProps];

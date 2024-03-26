import type { PrivateIdentifier, Program, Property } from 'estree';
import type { Plugin, Transformer } from 'unified';

// TODO: I've committed React crimes here with no keys

function recmaPluginMarkdownArrays(): Transformer<Program> {
  return async function transformer(ast) {
    const { walk } = await import('estree-walker');

    walk(ast, {
      enter(node) {
        // Avoid wrapping arrays in fragments so our react elements can pass arrays to <Stack /> for Braid to be happy
        if (
          node.type === 'CallExpression' &&
          node.callee.type === 'Identifier' &&
          node.callee.name.includes('jsx')
        ) {
          if (
            node.arguments[0].type === 'Identifier' &&
            node.arguments[0].name === '_createMdxContent'
          ) {
            node.callee = {
              type: 'Identifier',
              name: '_createMdxContent',
            };
            node.arguments = [
              {
                type: 'Identifier',
                name: 'props',
              },
            ];
          } else if (
            node.arguments[0].type === 'Identifier' &&
            node.arguments[0].name === '_Fragment' &&
            node.arguments[1].type === 'ObjectExpression'
          ) {
            const children = node.arguments[1].properties.find(
              (prop): prop is Property =>
                prop.type === 'Property' &&
                (prop.key as PrivateIdentifier).name === 'children',
            );
            // @ts-expect-error --
            delete node.arguments;
            // @ts-expect-error
            delete node.callee;
            // @ts-expect-error
            node.type = 'ArrayExpression';
            // @ts-expect-error
            node.elements = children?.value?.elements;
          }
        }

        if (node.type === 'ArrayExpression') {
          node.elements = node.elements.filter(
            (elem) => elem?.type !== 'Literal' || elem.value !== '\n',
          );
        }
      },
    });
  };
}

export const recmaPlugins: Array<Plugin<[], Program>> = [
  recmaPluginMarkdownArrays,
];

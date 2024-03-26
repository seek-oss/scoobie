// Stolen from https://github.com/remcohaszing/remark-mdx-images/blob/main/index.ts with some slight modifications for root-relative imports

const visit = require('unist-util-visit');

const urlPattern = /^(https?:)?\//;
const relativePathPattern = /\.\.?\//;
const absolutePathPattern = /^\/[^/]/;

module.exports.importImages = () => (ast) => {
  const imports = [];
  const imported = new Map();

  visit(ast, 'image', (node, index, parent) => {
    // eslint-disable-next-line prefer-const
    let { alt = null, title, url } = node;
    url = decodeURIComponent(url);
    if (urlPattern.test(url) && !absolutePathPattern.test(url)) {
      return;
    }
    if (!relativePathPattern.test(url) && !absolutePathPattern.test(url)) {
      url = `./${url}`;
    }

    let name = imported.get(url);
    if (!name) {
      name = `__${imported.size}_${url.replaceAll(/\W/g, '_')}__`;

      imports.push({
        type: 'ImportDeclaration',
        source: { type: 'Literal', value: url },
        specifiers: [
          {
            type: 'ImportDefaultSpecifier',
            local: { type: 'Identifier', name },
          },
        ],
      });
      imported.set(url, name);
    }

    const textElement = {
      type: 'mdxJsxTextElement',
      name: 'img',
      children: [],
      attributes: [
        { type: 'mdxJsxAttribute', name: 'alt', value: alt },
        {
          type: 'mdxJsxAttribute',
          name: 'src',
          value: {
            type: 'mdxJsxAttributeValueExpression',
            value: name,
            data: {
              estree: {
                type: 'Program',
                sourceType: 'module',
                comments: [],
                body: [
                  {
                    type: 'ExpressionStatement',
                    expression: { type: 'Identifier', name },
                  },
                ],
              },
            },
          },
        },
      ],
    };
    if (title) {
      textElement.attributes.push({
        type: 'mdxJsxAttribute',
        name: 'title',
        value: title,
      });
    }
    parent.children.splice(index, 1, textElement);
  });

  if (imports.length) {
    ast.children.unshift({
      type: 'mdxjsEsm',
      value: '',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: imports,
        },
      },
    });
  }
};

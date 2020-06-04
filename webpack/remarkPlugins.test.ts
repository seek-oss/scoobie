import path from 'path';

import {
  remarkImgFixer,
  remarkSpreadListItems,
  remarkSvgFixer,
  remarkTableFixer,
} from './remarkPlugins';

describe('remarkImgFixer', () => {
  const runPlugin = (ast: Readonly<Record<string, unknown>>) => {
    const astCopy = { ...ast };

    remarkImgFixer()(astCopy, {
      history: [path.join(__dirname, 'test.mdx')],
    });

    return astCopy;
  };

  it('transforms non-SVG relative image URL', () => {
    const ast = {
      type: 'image',
      url: './assets/image.png',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src={require('./assets/image.png').default}
        title=\\"\\"
      />",
      }
    `);
  });

  it('transforms non-SVG relative image URL without prefix', () => {
    const ast = {
      type: 'image',
      url: 'assets/image.png',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src={require('./assets/image.png').default}
        title=\\"\\"
      />",
      }
    `);
  });

  it('transforms non-SVG root-relative image URL in same directory', () => {
    const ast = {
      type: 'image',
      url: '/webpack/image.png',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src={require('./image.png').default}
        title=\\"\\"
      />",
      }
    `);
  });

  it('transforms non-SVG root-relative image URL in different directory', () => {
    const ast = {
      type: 'image',
      url: '/src/assets/image.png',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src={require('../src/assets/image.png').default}
        title=\\"\\"
      />",
      }
    `);
  });

  it('transforms non-SVG external image URL', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/pong.png',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src=\\"https://example.com/pong.png\\"
        title=\\"\\"
      />",
      }
    `);
  });

  it('supports title and alt props', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/pong.png',
      title: 'alpha',
      alt: 'bravo',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"bravo\\"
        src=\\"https://example.com/pong.png\\"
        title=\\"alpha\\"
      />",
      }
    `);
  });

  it('pulls width from title', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/pong.png',
      title: '=100x',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src=\\"https://example.com/pong.png\\"
        style={{ maxWidth: '100%', width: 100 }}
        title=\\"\\"
      />",
      }
    `);
  });

  it('pulls height from title', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/pong.png',
      title: '=x200',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src=\\"https://example.com/pong.png\\"
        style={{ height: 200 }}
        title=\\"\\"
      />",
      }
    `);
  });

  it('pulls width and height from title', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/pong.png',
      title: '=100x200',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src=\\"https://example.com/pong.png\\"
        style={{ height: 200, maxWidth: '100%', width: 100 }}
        title=\\"\\"
      />",
      }
    `);
  });

  it('preserves rest of the title', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/pong.png',
      title: '=100x Alpha',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<img
        alt=\\"\\"
        src=\\"https://example.com/pong.png\\"
        style={{ maxWidth: '100%', width: 100 }}
        title=\\"Alpha\\"
      />",
      }
    `);
  });

  it('ignores image without a string URL', () => {
    const ast = {
      type: 'image',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });

  it('ignores SVG image', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/drawing.svg',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });

  it('ignores image with a dangerous URL', () => {
    const ast = {
      type: 'image',
      url: "https://example.com/'pong'.png",
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });
});

describe('remarkSpreadListItems', () => {
  it('spreads all list items', () => {
    const ast = {
      type: 'list',
      children: [
        {
          type: 'listItem',
          spread: true,
        },
        {
          type: 'listItem',
          spread: false,
        },
      ],
    } as const;

    const astCopy = { ...ast };

    remarkSpreadListItems()(astCopy);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "children": Array [
          Object {
            "spread": true,
            "type": "listItem",
          },
          Object {
            "spread": true,
            "type": "listItem",
          },
        ],
        "type": "list",
      }
    `);
  });
});

describe('remarkSvgFixer', () => {
  const runPlugin = (ast: Readonly<Record<string, unknown>>) => {
    const astCopy = { ...ast };

    remarkSvgFixer()(astCopy, {
      history: [path.join(__dirname, 'test.mdx')],
    });

    return astCopy;
  };

  it('transforms SVG relative image URL', () => {
    const ast = {
      type: 'image',
      url: './drawing.svg',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<span
        dangerouslySetInnerHTML={{
          __html: require('./drawing.svg').default,
        }}
        title=\\"\\"
      />",
      }
    `);
  });

  it('transforms non-SVG root-relative image URL in same directory', () => {
    const ast = {
      type: 'image',
      url: '/webpack/drawing.svg',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<span
        dangerouslySetInnerHTML={{
          __html: require('./drawing.svg').default,
        }}
        title=\\"\\"
      />",
      }
    `);
  });

  it('transforms non-SVG root-relative image URL in different directory', () => {
    const ast = {
      type: 'image',
      url: '/src/assets/drawing.svg',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<span
        dangerouslySetInnerHTML={{
          __html: require('../src/assets/drawing.svg').default,
        }}
        title=\\"\\"
      />",
      }
    `);
  });

  it('prefers title prop over alt prop', () => {
    const ast = {
      type: 'image',
      url: './drawing.svg',
      title: 'alpha',
      alt: 'bravo',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<span
        dangerouslySetInnerHTML={{
          __html: require('./drawing.svg').default,
        }}
        title=\\"alpha\\"
      />",
      }
    `);
  });

  it('falls back to alt prop', () => {
    const ast = {
      type: 'image',
      url: './drawing.svg',
      alt: 'bravo',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "type": "jsx",
        "value": "<span
        dangerouslySetInnerHTML={{
          __html: require('./drawing.svg').default,
        }}
        title=\\"bravo\\"
      />",
      }
    `);
  });

  it('ignores external URL', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/drawing.svg',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });

  it('ignores image without a string URL', () => {
    const ast = {
      type: 'image',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });

  it('ignores non-SVG image', () => {
    const ast = {
      type: 'image',
      url: 'https://example.com/favicon.ico',
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });

  it('ignores image with a dangerous URL', () => {
    const ast = {
      type: 'image',
      url: "https://example.com/'drawing'.svg",
    } as const;

    const astCopy = runPlugin(ast);

    expect(astCopy).toStrictEqual(ast);
  });
});

describe('remarkTableFixer', () => {
  it('wraps raw table cells', () => {
    const ast = {
      type: 'table',
      children: [
        {
          type: 'tableRow',
          children: [
            {
              type: 'tableCell',
              children: [
                {
                  type: 'text',
                  value: 'header cell',
                },
              ],
            },
          ],
        },
        {
          type: 'tableRow',
          children: [
            {
              type: 'tableCell',
              children: [
                {
                  type: 'text',
                  value: 'regular cell',
                },
              ],
            },
          ],
        },
      ],
    } as const;

    const astCopy = { ...ast };

    remarkTableFixer()(astCopy);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "children": Array [
          Object {
            "children": Array [
              Object {
                "children": Array [
                  Object {
                    "children": Array [
                      Object {
                        "children": Array [
                          Object {
                            "type": "text",
                            "value": "header cell",
                          },
                        ],
                        "type": "strong",
                      },
                    ],
                    "type": "paragraph",
                  },
                ],
                "type": "tableCell",
              },
            ],
            "type": "tableRow",
          },
          Object {
            "children": Array [
              Object {
                "children": Array [
                  Object {
                    "children": Array [
                      Object {
                        "type": "text",
                        "value": "regular cell",
                      },
                    ],
                    "type": "paragraph",
                  },
                ],
                "type": "tableCell",
              },
            ],
            "type": "tableRow",
          },
        ],
        "type": "table",
      }
    `);
  });

  it('ignores table cells with paragraph tags', () => {
    const ast = {
      type: 'table',
      children: [
        {
          type: 'tableRow',
          children: [
            {
              type: 'tableCell',
              children: [
                {
                  type: 'jsx',
                  value: '<p>',
                },
                {
                  type: 'jsx',
                  value: '<p>',
                },
              ],
            },
            {
              type: 'tableCell',
              children: [
                {
                  type: 'jsx',
                  value: '</p>',
                },
                {
                  type: 'text',
                  value: 'hello',
                },
              ],
            },
            {
              type: 'tableCell',
              children: [
                {
                  type: 'jsx',
                  value: '< P  >',
                },
              ],
            },
            {
              type: 'tableCell',
              children: [
                {
                  type: 'jsx',
                  value: '<P/>',
                },
              ],
            },
          ],
        },
      ],
    } as const;

    const astCopy = { ...ast };

    remarkTableFixer()(astCopy);

    expect(astCopy).toStrictEqual(ast);
  });
});

import { formatTableCells } from './formatTableCells';

describe('formatTableCells', () => {
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

    formatTableCells()(astCopy);

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

    formatTableCells()(astCopy);

    expect(astCopy).toStrictEqual(ast);
  });
});

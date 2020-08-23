import { mergeCodeBlocks } from './mergeCodeBlocks';

describe('mergeCodeBlocks', () => {
  it('merges adjacent code blocks', () => {
    const ast = {
      type: 'paragraph',
      children: [
        {
          type: 'code',
          value: '1',
        },
        {
          type: 'code',
          value: '2',
          lang: 'lang',
        },
        {
          type: 'code',
          value: '3',
          meta: 'meta',
        },
      ],
    };

    const astCopy = { ...ast };

    mergeCodeBlocks()(astCopy);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "children": Array [
          Object {
            "meta": "scoobie=\\"W3sidHlwZSI6ImNvZGUiLCJ2YWx1ZSI6IjEifSx7InR5cGUiOiJjb2RlIiwidmFsdWUiOiIyIiwibGFuZyI6ImxhbmcifSx7InR5cGUiOiJjb2RlIiwidmFsdWUiOiIzIiwibWV0YSI6Im1ldGEifV0=\\"",
            "type": "code",
            "value": "1",
          },
        ],
        "type": "paragraph",
      }
    `);

    const base64 = astCopy.children[0]?.meta?.match(/scoobie="([^"]+)"/)?.[1];

    expect(base64).toBeDefined();

    expect(JSON.parse(Buffer.from(base64, 'base64').toString()))
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "type": "code",
          "value": "1",
        },
        Object {
          "lang": "lang",
          "type": "code",
          "value": "2",
        },
        Object {
          "meta": "meta",
          "type": "code",
          "value": "3",
        },
      ]
    `);
  });

  it('leaves an isolated code block alone', () => {
    const ast = {
      type: 'paragraph',
      children: [
        {
          type: 'code',
          value: '1',
        },
      ],
    };

    const astCopy = { ...ast };

    mergeCodeBlocks()(astCopy);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "children": Array [
          Object {
            "type": "code",
            "value": "1",
          },
        ],
        "type": "paragraph",
      }
    `);
  });

  it('leaves separate code blocks alone', () => {
    const ast = {
      type: 'paragraph',
      children: [
        {
          type: 'code',
          value: '1',
        },
        {
          type: 'thematicBreak',
        },
        {
          type: 'code',
          value: '2',
        },
      ],
    };

    const astCopy = { ...ast };

    mergeCodeBlocks()(astCopy);

    expect(astCopy).toMatchInlineSnapshot(`
      Object {
        "children": Array [
          Object {
            "type": "code",
            "value": "1",
          },
          Object {
            "type": "thematicBreak",
          },
          Object {
            "type": "code",
            "value": "2",
          },
        ],
        "type": "paragraph",
      }
    `);
  });
});

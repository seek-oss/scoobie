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
            "lang": "scoobie-merged-code",
            "meta": "[{\\"type\\":\\"code\\",\\"value\\":\\"1\\"},{\\"type\\":\\"code\\",\\"value\\":\\"2\\",\\"lang\\":\\"lang\\"},{\\"type\\":\\"code\\",\\"value\\":\\"3\\",\\"meta\\":\\"meta\\"}]",
            "type": "code",
            "value": "1",
          },
        ],
        "type": "paragraph",
      }
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

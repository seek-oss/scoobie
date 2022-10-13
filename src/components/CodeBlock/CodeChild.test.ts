import { normaliseChildren } from './CodeChild';

describe('normaliseChildren', () => {
  it('handles partial props', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '  1',
          },
          {
            code: '2  ',
            language: 'gQL',
          },
          {
            code: '\n3\n',
            label: 'Gql',
          },
        ],

        true,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "1",
          "label": "Text",
          "language": "text",
        },
        {
          "code": "2",
          "label": "GraphQL",
          "language": "graphql",
        },
        {
          "code": "3",
          "label": "Gql",
          "language": "text",
        },
      ]
    `));

  it('handles disabled trimming', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '  1',
          },
          {
            code: '2  ',
            language: 'gQL',
          },
          {
            code: '\n3\n',
            label: 'Gql',
          },
        ],

        false,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "  1",
          "label": "Text",
          "language": "text",
        },
        {
          "code": "2  ",
          "label": "GraphQL",
          "language": "graphql",
        },
        {
          "code": "
      3
      ",
          "label": "Gql",
          "language": "text",
        },
      ]
    `));

  it('infers GraphQL x2 labels', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '1',
            language: 'graphql',
          },
          {
            code: '2',
            language: 'json',
          },
        ],

        true,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "1",
          "label": "Query",
          "language": "graphql",
        },
        {
          "code": "2",
          "label": "Variables",
          "language": "json",
        },
      ]
    `));

  it('infers GraphQL x3 labels', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '1',
            language: 'graphql',
          },
          {
            code: '2',
            language: 'json',
          },
          {
            code: '3',
            language: 'json',
          },
        ],

        true,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "1",
          "label": "Query",
          "language": "graphql",
        },
        {
          "code": "2",
          "label": "Variables",
          "language": "json",
        },
        {
          "code": "3",
          "label": "Result",
          "language": "json",
        },
      ]
    `));

  it('infers HTTP labels', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '1',
            language: 'http',
          },
          {
            code: '2',
            language: 'http',
          },
        ],

        true,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "1",
          "label": "Request",
          "language": "http",
        },
        {
          "code": "2",
          "label": "Response",
          "language": "http",
        },
      ]
    `));

  it('preserves unique labels', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '1',
            language: 'http',
            label: 'Response',
          },
          {
            code: '2',
            language: 'http',
            label: 'Request',
          },
        ],

        true,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "1",
          "label": "Response",
          "language": "http",
        },
        {
          "code": "2",
          "label": "Request",
          "language": "http",
        },
      ]
    `));

  it('overwrites non-unique labels', () =>
    expect(
      normaliseChildren(
        [
          {
            code: '1',
            label: 'Response',
          },
          {
            code: '2',
            label: 'Response',
          },
          {
            code: '3',
            label: 'Response 1',
          },
          {
            code: '4',
            label: 'Response 1 1',
          },
        ],

        true,
      ),
    ).toMatchInlineSnapshot(`
      [
        {
          "code": "1",
          "label": "Response 1",
          "language": "text",
        },
        {
          "code": "2",
          "label": "Response 2",
          "language": "text",
        },
        {
          "code": "3",
          "label": "Response 3",
          "language": "text",
        },
        {
          "code": "4",
          "label": "Response 1 1",
          "language": "text",
        },
      ]
    `));
});

import { spreadListItems } from './spreadListItems';

describe('spreadListItems', () => {
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

    spreadListItems()(astCopy);

    expect(astCopy).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "spread": true,
            "type": "listItem",
          },
          {
            "spread": true,
            "type": "listItem",
          },
        ],
        "type": "list",
      }
    `);
  });
});

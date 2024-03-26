const visit = require('unist-util-visit');

const containsParagraphNode = (node) =>
  (node.type === 'jsx' &&
    typeof node.value === 'string' &&
    node.value.toLocaleLowerCase().trim().replace(/[\s/]/g, '') === '<p>') ||
  (Array.isArray(node.children) && node.children.some(containsParagraphNode));

/**
 * Apply default formatting to table cells for improved rendering in a Braid
 * context:
 *
 * - Wrap cell in a `<strong>` if it is a header cell
 * - Wrap cell in a `<p>`
 *
 * This can be disabled by using an explicit `<p>` tag in the cell.
 */
export const formatTableCells = () => (tree) =>
  visit(tree, 'table', (node) =>
    node.children.forEach((row, rowIndex) =>
      row.children.forEach((cell) => {
        if (containsParagraphNode(cell)) {
          return;
        }

        if (rowIndex === 0) {
          cell.children = [
            {
              children: cell.children,
              type: 'strong',
            },
          ];
        }

        cell.children = [
          {
            children: cell.children,
            type: 'paragraph',
          },
        ];
      }),
    ),
  );

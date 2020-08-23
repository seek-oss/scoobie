const visit = require('unist-util-visit');

/**
 * Merges adjacent code blocks into one node.
 *
 * The aggregated node representations are smuggled through the `meta` field.
 * This makes it easy for our MDX implementation to parse and render the
 * resulting node as a multi-code block.
 */
module.exports.mergeCodeBlocks = () => (tree) =>
  visit(tree, 'code', (node, index, parent) => {
    let siblingCount = 0;

    let sibling;
    while (
      (sibling = parent.children[index + 1 + siblingCount]) &&
      sibling.type === 'code'
    ) {
      siblingCount++;
    }

    if (siblingCount === 0) {
      return;
    }

    const siblings = parent.children.splice(index + 1, siblingCount);

    // This must be serialised before mutating `node`
    const meta = JSON.stringify([node, ...siblings]);

    node.lang = 'scoobie-merged-code';
    node.meta = meta;
  });

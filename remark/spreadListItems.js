const visit = require('unist-util-visit');

/**
 * Treat all list items as if they have a blank line between them.
 *
 * This achieves consistent spacing between items.
 */
module.exports.spreadListItems = () => (tree) =>
  visit(tree, 'listItem', (node) => (node.spread = true));

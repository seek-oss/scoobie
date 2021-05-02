const slug = require('remark-slug');

const { formatTableCells } = require('./formatTableCells');
const { imageToJsx } = require('./imageToJsx');
const { mergeCodeBlocks } = require('./mergeCodeBlocks');
const { mermaid } = require('./mermaid');
const { spreadListItems } = require('./spreadListItems');

module.exports = {
  remarkPlugin: {
    formatTableCells,
    imageToJsx,
    mergeCodeBlocks,
    mermaid,
    slug,
    spreadListItems,
  },
};

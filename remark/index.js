const slug = require('remark-slug');

const { formatTableCells } = require('./formatTableCells');
const { imageToJsx } = require('./imageToJsx');
const { mergeCodeBlocks } = require('./mergeCodeBlocks');
const { MERMAID_DIR, mermaid } = require('./mermaid');
const { spreadListItems } = require('./spreadListItems');

module.exports = {
  MERMAID_DIR,

  remarkPlugin: {
    formatTableCells,
    imageToJsx,
    mergeCodeBlocks,
    mermaid,
    slug,
    spreadListItems,
  },
};

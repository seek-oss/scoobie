const slug = require('remark-slug');

const { formatTableCells } = require('./formatTableCells');
const { importImages } = require('./importImages');
const { mergeCodeBlocks } = require('./mergeCodeBlocks');
const { mermaid } = require('./mermaid');
const { spreadListItems } = require('./spreadListItems');

module.exports = {
  remarkPlugin: {
    formatTableCells,
    importImages,
    mergeCodeBlocks,
    mermaid,
    slug,
    spreadListItems,
  },
};

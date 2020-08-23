const slug = require('remark-slug');

const { formatTableCells } = require('./formatTableCells');
const { imageToJsx } = require('./imageToJsx');
const { mergeCodeBlocks } = require('./mergeCodeBlocks');
const { spreadListItems } = require('./spreadListItems');

module.exports = {
  remarkPlugin: {
    formatTableCells,
    imageToJsx,
    mergeCodeBlocks,
    slug,
    spreadListItems,
  },

  remarkPlugins: [
    slug,
    mergeCodeBlocks,
    spreadListItems,
    formatTableCells,
    imageToJsx,
  ],
};

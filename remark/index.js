const slug = require('remark-slug');

const { formatTableCells } = require('./formatTableCells');
const { imageToJsx } = require('./imageToJsx');
const { spreadListItems } = require('./spreadListItems');

module.exports = {
  remarkPlugin: {
    formatTableCells,
    imageToJsx,
    slug,
    spreadListItems,
  },

  remarkPlugins: [slug, spreadListItems, formatTableCells, imageToJsx],
};

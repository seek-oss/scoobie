const { remarkPlugins } = require('../remark');

const { dangerouslySetWebpackConfig } = require('./config');

module.exports = {
  dangerouslySetWebpackConfig,
  remarkPlugins,
};

const { dangerouslySetWebpackConfig } = require('./webpack');

module.exports = {
  orderImports: true,

  dangerouslySetWebpackConfig,
};

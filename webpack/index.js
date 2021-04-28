const { remarkPlugins } = require('../remark');

const { dangerouslySetWebpackConfig } = require('./config');
const { ScoobieWebpackPlugin } = require('./webpackPlugin');

module.exports = {
  ScoobieWebpackPlugin,
  dangerouslySetWebpackConfig,
  remarkPlugins,
};

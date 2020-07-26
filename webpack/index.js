const { dangerouslySetWebpackConfig } = require('./config');
const { remarkPlugins } = require('./remarkPlugins');
const { ScoobieWebpackPlugin } = require('./webpackPlugin');

module.exports = {
  ScoobieWebpackPlugin,
  dangerouslySetWebpackConfig,
  remarkPlugins,
};

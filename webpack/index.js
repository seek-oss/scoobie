const { dangerouslySetWebpackConfig } = require('./config');
const { ScoobieWebpackPlugin } = require('./webpackPlugin');

module.exports = {
  ScoobieWebpackPlugin,
  dangerouslySetWebpackConfig,
};

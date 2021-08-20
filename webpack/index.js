const { merge } = require('webpack-merge');

const { dangerouslySetWebpackConfig } = require('./config');
const { ScoobieWebpackPlugin } = require('./webpackPlugin');

module.exports = {
  ScoobieWebpackPlugin,
  dangerouslySetWebpackConfig,
  merge,
};

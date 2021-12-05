const { merge } = require('webpack-merge');

const { ScoobieWebpackPlugin } = require('./webpackPlugin');

module.exports.dangerouslySetWebpackConfig = (webpackConfig) =>
  merge(webpackConfig, {
    plugins: [
      // This must run after SkuWebpackPlugin.
      new ScoobieWebpackPlugin(),
    ],
  });

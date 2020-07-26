const { ScoobieWebpackPlugin } = require('./webpackPlugin');

module.exports.dangerouslySetWebpackConfig = (webpackConfig) => ({
  ...webpackConfig,

  plugins: [
    ...webpackConfig.plugins,

    // Run after SkuWebpackPlugin
    new ScoobieWebpackPlugin(),
  ],
});

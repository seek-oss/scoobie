const { remarkPlugins } = require('./remarkPlugins');

module.exports.dangerouslySetWebpackConfig = (webpackConfig) => ({
  ...webpackConfig,
  module: {
    ...webpackConfig.module,
    rules: [
      ...webpackConfig.module.rules,
      {
        test: /\.mdx?$/i,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              remarkPlugins,
            },
          },
        ],
      },
    ],
  },
});

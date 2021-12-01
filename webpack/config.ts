import { merge } from 'webpack-merge';

import { ScoobieWebpackPlugin } from './webpackPlugin';

export const dangerouslySetWebpackConfig = (webpackConfig: any) =>
  merge(webpackConfig, {
    plugins: [
      // This must run after SkuWebpackPlugin.
      new ScoobieWebpackPlugin(),
    ],
  });

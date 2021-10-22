import merge from 'webpack-merge';

import { entry, plugins, resolve, resolveLoader, rules } from './common';

const config = merge([
  {
    name: '[[DEVELOPMENT BUILD]]',
    mode: 'development',
    entry,
    target: 'web',
    devtool: 'inline-source-map',
    plugins,
    output: {
      filename: '[name].js',
      publicPath: '/',
    },
    devServer: {
      port: process.env.PORT || 3000,
      host: 'localhost',
      hot: true,
      historyApiFallback: {
        index: '/',
      },
    },
  },
  rules,
  resolve,
  resolveLoader,
]);

export default config;

import path from 'path';

import merge from 'webpack-merge';

import { entry, plugins, resolve, resolveLoader, rules } from './common';

const config = merge([
  {
    name: '[[PRODUCTION BUILD]]',
    mode: 'production',
    entry,
    target: 'web',
    performance: {
      hints: false,
    },
    devtool: 'source-map',
    plugins,
    output: {
      path: path.resolve(path.join('.', 'dist')),
      filename: '[name].[chunkhash].js',
      publicPath: '/',
      clean: true,
    },
  },
  rules,
  resolve,
  resolveLoader,
]);

export default config;

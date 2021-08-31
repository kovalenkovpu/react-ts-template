import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import webpack from 'webpack';
import merge from 'webpack-merge';

import optimization from './common/optimization';
import resolve from './common/resolve';
import resolveLoader from './common/resolveLoader';
import rules from './common/rules';

const target = 'web';
const entry = 'web';

const config = merge([
  {
    name: entry,
    mode: 'development',
    entry: ['./src/index.tsx'],
    target,
    performance: {
      hints: false,
    },
    devtool: 'inline-source-map',
    plugins: [
      new ESLintPlugin({ extensions: ['ts', 'tsx'] }),
      new StylelintPlugin({ files: '**/*.(ts|tsx)' }),
      new webpack.EnvironmentPlugin(Object.keys(process.env)),
      new HtmlWebpackPlugin({
        template: path.resolve(path.join('.', 'public', 'index.html')),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(path.join('.', 'public')),
            globOptions: {
              ignore: ['**/index.html'],
            },
            to: path.resolve(path.join('.', 'dist')),
          },
        ],
      }),
      new CleanWebpackPlugin(),
    ],
    output: {
      path: path.resolve(path.join('.', 'dist')),
      filename: '[name].[chunkhash].js',
      publicPath: '/',
    },
    devServer: {
      port: process.env.PORT || 3000,
      host: 'localhost',
      hot: true,
      historyApiFallback: {
        index: '/',
      },
      open: true,
    },
  },
  rules,
  optimization,
  resolve,
  resolveLoader,
]);

export default config;

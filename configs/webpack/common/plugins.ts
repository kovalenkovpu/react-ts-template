import path from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StylelintPlugin from 'stylelint-webpack-plugin';
import webpack from 'webpack';

const plugins = [
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
];

export { plugins };

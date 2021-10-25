import path from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

const plugins = [
  new webpack.EnvironmentPlugin(Object.keys(process.env)),
  new HtmlWebpackPlugin({
    template: path.resolve(path.join('.', 'public', 'index.html')),
  }),
  new MiniCssExtractPlugin(),
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

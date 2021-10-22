import path from 'path';

const resolve = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve('src'),
    },
  },
};

export { resolve };

const optimization = {
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          minChunks: 2,
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },
};

export default optimization;

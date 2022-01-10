module.exports = {
  mode: 'development',
  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 4000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
        sideEffects: true,
      },
    ],
  },
}

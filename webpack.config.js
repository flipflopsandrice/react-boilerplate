var path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/js/index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  plugins: [
      new HtmlWebpackPlugin({
        cash: true,
        hash: true,
        template: './src/client/index.html'
      })
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { compact: false }
      }
    ]
  }
};

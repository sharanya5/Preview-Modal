// webpack.config.js
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  // output: {
  //   path: path.resolve(__dirname, 'build'),
  //   filename: 'index.js',
  //   libraryTarget: 'commonjs2',
  // },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.*scss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {
    react: 'commonjs react',
  },
};

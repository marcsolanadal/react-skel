const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./webpack.rules');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      constants: path.resolve(__dirname, '../src/constants'),
      images: path.resolve(__dirname, '../assets/images')
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  module: {
    rules: rules
  }
};

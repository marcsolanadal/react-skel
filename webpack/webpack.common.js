const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ 
      title: 'Game',
      template: path.resolve(__dirname, '../assets/index.html')
    })
  ],
  module: {
    rules: rules
  }
};

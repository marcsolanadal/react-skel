const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [
    'webpack-hot-middleware/client'    
  ],
  devtool: 'cheap-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "Super Game!",
      suppressSuccess: true
    })
  ],
});

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname),
    publicPath: '/'
  },
  devtool: 'cheap-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      images: path.resolve(__dirname, 'assets/img'),
      sounds: path.resolve(__dirname, 'assets/sounds')
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),    
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ 
      title: 'Output Management',
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { 
            loader: 'style-loader' 
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      },
      {
        test: /\.(mp3)$/,
        use: ['file-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};

module.exports = config;

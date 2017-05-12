const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './app/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/main.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Tree-shaking' })
  ],
  devtool: "eval-source-map" // Default development sourcemap
};

module.exports = config;

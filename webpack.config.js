const path = require('path');

module.exports = {
  entry: ['./app/scripts/main.js'],
  
  output: {
    path: path.resolve(__dirname, 'app/'),
    publicPath: '/app/',
    filename: 'main.min.js'
  },
  
  devtool: 'source-map',
  devServer: {
    contentBase: 'app',
    //   compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {root: '.'}
        }]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        use: [{
          loader: 'riot-tag-loader',
          query: {
            type: 'es6',
            hot: true,
            debug: true
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};

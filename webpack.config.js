const autoprefixer = require('autoprefixer');
const path = require('path');

const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 40',
  'chrome >= 45',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

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
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer({
                browsers: AUTOPREFIXER_BROWSERS
              })
            ],
            sourceMap: true
          }
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


const path = require('path')
const webpack = require('webpack')


module.exports = {
  entry: '',
  output: {

  },
  module: {
    rules: [
      // es6 -  es5  babel-loader  core  preset/env
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
         'style-loader',
         'css-loader',
         'sass-loader'
        ]
      }
    ]
  },
  devServer: {

  },
  plugins: [

  ]
}


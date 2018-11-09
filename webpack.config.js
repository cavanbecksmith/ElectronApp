const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap',
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
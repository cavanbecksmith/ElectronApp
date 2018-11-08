const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // entry: './src/app.js',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'build.js'
  // },
  // resolve: {
  //   alias: {
  //     vue: 'vue/dist/vue.esm.js'
  //   }
  // },
  // target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   loader: 'file',
      //   query: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins = [
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     })
//   ]
// } else {
//   module.exports.devtool = '#source-map'
// }
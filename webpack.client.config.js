const { join, resolve } = require('path');
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

module.exports = {
  context: __dirname,

  entry: ['babel-polyfill', join(__dirname, 'src/entry-client.js')],

  output: {
    path: resolve(__dirname, './public'),
    filename: 'client.js',
  },

  resolve: {
    modules: [resolve('./src/'), resolve('./node_modules')],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('autoprefixer')()],
        },
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [new VueSSRClientPlugin()],
};

const { join, resolve } = require('path');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = {
  entry: ['babel-polyfill', join(__dirname, 'src/entry-server.js')],

  target: 'node',

  output: {
    path: resolve(__dirname, './public'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
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

  externals: Object.keys(require('./package.json').dependencies),

  plugins: [new VueSSRServerPlugin()],
};

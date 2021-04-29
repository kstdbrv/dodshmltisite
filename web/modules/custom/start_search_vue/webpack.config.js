const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, './assets/js/src/main.js'),
  dist: path.join(__dirname, './assets/js/dist'),
}

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', PATHS.src],
  output: {
    path: PATHS.dist,
    publicPath: '',
    filename: '[name].js',
  },
    module: {
        rules: [
            {
              test: /\.vue$/,
              loader: 'vue-loader',
            },
            {
              test: /\.js$/,
              exclude: '/node_modules/',
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  {
                    'plugins': ['@babel/plugin-proposal-class-properties']
                  }
                ]
              }
            },
            {
              test: /\.s[ac]ss$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: false,
                  }
                },
                {
                  loader: 'sass-loader',
                  options: { sourceMap: false }
                }
              ]
            },
        ],
    },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}
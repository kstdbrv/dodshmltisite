const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');


const PATHS = {
  src: path.join(__dirname, './assets/src/main.js'),
  dist: path.join(__dirname, './assets/dist'),
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
              test: /\.css$/,
              use: [miniCss.loader, "css-loader",]
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
              ]
            },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader', // A webpack loader which loads SVG file as utf-8 encoded DataUrl string.
              options: {
                name: './svg/[name].[ext]',
                limit: 10000,
              },
            },
          ]
        },
        ],
    },
  plugins: [
    new CleanWebpackPlugin(),
    new miniCss({
      filename: 'style.css',
    }),
    new VueLoaderPlugin()
  ]
}
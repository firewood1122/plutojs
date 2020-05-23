const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (opt) => {
  return {
    mode: 'production',
    entry: opt.path,
    output: {
      path: path.resolve(opt.packagePath, './build'),
      filename: `index.js`,
      library: opt.name,
      globalObject: 'this',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: opt.externals,
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: 'index.css',  // 分离后的文件名
        ignoreOrder: false
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts(x)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(opt.packagePath, './tsconfig.json')
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },
            'postcss-loader',
            {
              loader: 'less-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
            },
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'url-loader'
          }
        }
      ]
    },
    optimization: {
      minimize: true
    }
  }
}
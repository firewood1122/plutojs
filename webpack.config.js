const fs = require('fs');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (opt) => {
  return {
    mode: 'production',
    entry: opt.path,
    output: {
      path: path.resolve(opt.packagePath, './build'),
      filename: `index.js`,
      library: opt.name,
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
    externals: opt.externals,
    plugins: [
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.ts(x)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, './tsconfig.json')
              }
            }
          ]
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader'
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
        }
      ]
    },
    optimization: {
      minimize: true
    }
  }
}
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (opt) => {
  console.log(opt);
  return {
    mode: 'production',
    entry: path.resolve(opt.path, './lib/index.tsx'),
    output: {
      path: path.resolve(opt.path, './build'),
      filename: `${opt.name}.min.js`,
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
              loader: 'ts-loader'
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
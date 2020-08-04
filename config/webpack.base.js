const path = require('path');
const loaderUtils = require('loader-utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (opt) => {
  return {
    mode: 'production',
    entry: opt.path,
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      alias: {
        '~/core': path.resolve(__dirname, '../packages/@plutojs'),
      }
    },
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
                modules: {
                  mode: 'local',
                  getLocalIdent: (context, localIdentName, localName, options) => {
                    const libPath = context._compiler.outputPath;
                    const packageName = /@plutojs\/(.*)\/build$/.exec(libPath)[1];
                    const packageBase64 = loaderUtils.getHashDigest(packageName, 'md5', 'base64');
                    const nameBase64 = loaderUtils.getHashDigest(localName, 'md5', 'base64');
                    return `${packageBase64}_${nameBase64}`;
                  },
                },
              }
            },
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
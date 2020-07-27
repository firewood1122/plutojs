const minimist = require('minimist');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');
const packageWebpackConfig = require('./base');
const args = minimist(process.argv.slice(2));

/**
 * 构建方法
 * 
 * @param {*} configs
 */
const build = (configs) => {
  configs.forEach(config => {
    webpack(webpackConfig(config), (err, stats) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(stats.toString({
        chunks: false, // 使构建过程更静默无输出
        colors: true // 在控制台展示颜色
      }))
      if (stats.hasErrors()) {
        return
      }
      console.log(`${config.name} build successed`)
    })
  })
}

// 按 -p 参数获取执行对应的webpack配置项
if (args.p) {
  if (packageWebpackConfig[args.p]) {
    build([packageWebpackConfig[args.p]])
  } else {
    console.error(`${args.p} package is not find!`)
  }
} else {
  // 执行所有配置
  build(Object.values(packageWebpackConfig))
}
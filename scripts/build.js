const fs = require('fs')
const path = require('path')
const minimist = require('minimist')
const webpack = require('webpack')

const webpackConfig = require('../webpack.config')
const args = minimist(process.argv.slice(2))

/**
 * 获取入口文件
 * 
 * @param {*} optPath 
 */
const getEntryPath = (optPath) => {
  const tsPath = path.resolve(optPath, './lib/index.ts');
  const tsxPath = path.resolve(optPath, './lib/index.tsx');
  if (fs.existsSync(tsPath)) {
    return filePath;
  } else if (fs.existsSync(tsxPath)) {
    return tsxPath;
  }
  return '';
};

/**
 * 获取外部依赖配置
 * 
 * @param {*} dependencies 
 */
const getExternals = (dependencies) => {
  const externals = {}
  if (dependencies) {
    Object.keys(dependencies).forEach(p => {
      externals[p] = `commonjs ${p}`
    })
    return externals
  }
}

// 遍历所有的包生成配置参数
const packageWebpackConfig = {}
const packageDir = '../packages/@plutojs'
const packages = fs.readdirSync(path.resolve(__dirname, packageDir))
packages.forEach(item => {
  const packagePath = path.resolve(__dirname, packageDir, item)
  const packageJsonPath = path.resolve(packagePath, 'package.json')
  if (fs.existsSync(packageJsonPath) && getEntryPath(packagePath)) {
    const { dependencies } = require(packageJsonPath)
    packageWebpackConfig[item] = {
      path: getEntryPath(packagePath),
      packagePath,
      name: item,
      externals: getExternals(dependencies)
    }
  }
})

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
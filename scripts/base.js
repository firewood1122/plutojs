const fs = require('fs');
const path = require('path');

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
  const externals = {};
  if (dependencies) {
    Object.keys(dependencies).forEach(p => {
      externals[p] = `commonjs ${p}`;
    })
    return externals;
  }
};

// 遍历所有的包生成配置参数
const packageWebpackConfig = {};
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
});

module.exports = packageWebpackConfig;
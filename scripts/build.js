const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod');
const packageWebpackConfig = require('./base');

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

// 执行构建
inquirer.prompt([
  {
    type: 'list',
    name: 'package',
    message: '请选择package',
    choices: function () {
      const packageDir = path.join(__dirname, '../packages/@plutojs');
      return ['all'].concat(fs.readdirSync(packageDir).filter(item => !item.startsWith('.')));
    }
  }
]).then(answers => {
  if (answers.package !== 'all') {
    // 构建单一组件
    build([packageWebpackConfig[answers.package]]);
  } else {
    // 构建所有组件
    build(Object.values(packageWebpackConfig))
  }
}).catch(err => {
  console.error(err);
});

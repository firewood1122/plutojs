const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.prod');
const packageWebpackConfig = require('./base');

inquirer.prompt([
  {
    type: 'list',
    name: 'package',
    message: '请选择package',
    choices: function () {
      const packageDir = path.join(__dirname, '../packages/@plutojs');
      return fs.readdirSync(packageDir).filter(item => !item.startsWith('.'));
    }
  }
]).then(answers => {
  const compiler = webpack(webpackConfig(packageWebpackConfig[answers.package]));
  const PORT = 7777;
  const app = express();
  app.use(
    middleware(compiler, {
      writeToDisk: true,
    })
  );
  app.listen(PORT, () => console.log(`Plutojs dev server listening on port ${PORT}!`));
}).catch(err => {
  console.error(err);
});

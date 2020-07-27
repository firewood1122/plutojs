const minimist = require('minimist');
const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.prod');
const packageWebpackConfig = require('./base');

const args = minimist(process.argv.slice(2));
if (!args.p || !packageWebpackConfig[args.p]) {
  if (args.p) {
    console.error(`${args.p} package is not find!`);
  } else {
    console.error(`please enter PackageName: yarn run build -p PackageName`);
  }
  return;
}

const compiler = webpack(webpackConfig(packageWebpackConfig[args.p]));
const app = express();

app.use(
  middleware(compiler, {
    writeToDisk: true,
  })
);

const PORT = 7777;
app.listen(PORT, () => console.log(`Plutojs dev server listening on port ${PORT}!`));
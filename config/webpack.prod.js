const getConfig = require('./webpack.base');

module.exports = (opt) => {
  const config = getConfig(opt);
  return Object.assign(config, {
  });
}
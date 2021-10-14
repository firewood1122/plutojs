/* eslint-disable */
module.exports = function (api) {
  const presets = ["@babel/react", "@babel/typescript"];
  const plugins = [];

  if (api.env("node")) {
    presets.push(["@babel/env", { targets: { node: true } }]);
  }

  api.cache(true);

  return {
    presets,
    plugins,
  };
};

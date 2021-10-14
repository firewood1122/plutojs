/* eslint-disable */
module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: ["iOS >= 7", "Android >= 4.0", "ie >= 9"],
    }),
    require("@plutojs/postcss-px2rem")({ remUnit: 75 }),
  ],
};

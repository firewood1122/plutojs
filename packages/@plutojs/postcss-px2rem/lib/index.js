/* eslint-disable */
const postcss = require("postcss");
const Px2rem = require("px2rem");

module.exports = postcss.plugin(
  "postcss-px2rem",
  (options) =>
    function (css, result) {
      if (
        css.first.type === "comment" &&
        css.first.text === "px2rem-disabled"
      ) {
        return css;
      }

      const oldCssText = css.toString();
      const px2remIns = new Px2rem(options);
      const newCssText = px2remIns.generateRem(oldCssText);
      const newCssObj = postcss.parse(newCssText);
      result.root = newCssObj;
    }
);

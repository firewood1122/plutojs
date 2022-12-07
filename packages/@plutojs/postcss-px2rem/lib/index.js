/* eslint-disable */
const postcss = require("postcss");
const Px2rem = require("px2rem");

module.exports = postcss.plugin(
  "postcss-px2rem",
  (options) =>
    function (css, result) {
      // 转换方法
      const _parse = () => {
        const oldCssText = css.toString();
        const px2remIns = new Px2rem(options);
        const newCssText = px2remIns.generateRem(oldCssText);
        const newCssObj = postcss.parse(newCssText);
        result.root = newCssObj;
      };

      // 默认不转换，指定文件转换
      if (options.manual) {
        if (
          css.first.type === "comment" &&
          css.first.text === "px2rem-enabled"
        ) {
          _parse();
        } else {
          return css;
        }
        return;
      }

      // 默认转换，指定文件不转换
      if (
        css.first &&
        css.first.type === "comment" &&
        css.first.text === "px2rem-disabled"
      ) {
        return css;
      }
      _parse();
    }
);

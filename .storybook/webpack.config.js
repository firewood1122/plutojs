const path = require("path");
const resolve = (dir) => path.resolve(__dirname, "..", "packages", dir);

module.exports = {
  resolve: {
    alias: {
      "@": resolve("@plutojs"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
};

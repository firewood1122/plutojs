const path = require('path');

module.exports = {
  stories: ['../packages/@plutojs/**/story/*.[tj]s'],
  addons: [
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.story\.js$/,
          include: [path.resolve(__dirname, '../packages/')], // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};
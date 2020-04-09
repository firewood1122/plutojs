const path = require('path');

module.exports = {
  stories: ['../packages/@plutojs/**/story/*.[tj]s'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-queryparams',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
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
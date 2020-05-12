const path = require('path');

module.exports = {
  stories: ['../packages/**/story/*.[tj]s'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-queryparams',
    '@storybook/addon-knobs',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: /\.story\.js$/,
          include: [path.resolve(__dirname, '../packages/')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
  ],
};
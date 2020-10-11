// Jest configuration file
//
// https://jestjs.io/docs/en/configuration.html
//

module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: false,
      tsConfig: 'tsconfig.jest.json',
    },
  },
  preset: 'ts-jest/presets/js-with-ts',
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Functional tests report',
        outputPath: './reports/functionaltests/index.html',
        styleOverridePath: './style.css',
        useCssFile: true,
      },
    ],
  ],
  silent: false,
  verbose: true,
  testEnvironment: 'node',
  testMatch: ['**/__functionaltests__/**/*+(ftest).[jt]s?(x)'],
};

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `config`
  ...require('config/eslint-next.js'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};

module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `config`
  ...require('config/eslint-next.js'),
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};

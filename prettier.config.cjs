/** @type {import('prettier').Config} */
const prettierConfig = {
  useTabs: true,
  printWidth: 100,
  overrides: [
    {
      files: "*.yml",
      options: {
        useTabs: false,
      },
    },
  ],
};

module.exports = prettierConfig;

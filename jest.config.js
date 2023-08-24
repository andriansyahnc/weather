/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  setupFiles: ["dotenv/config"],
  bail: 1,
};

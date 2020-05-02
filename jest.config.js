module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  "setupFiles": ["jest-canvas-mock"],
  transformIgnorePatterns: [
    'node_modules/(?!(ol)/)'
  ]
};

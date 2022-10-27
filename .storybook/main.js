module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    "@storybook/addon-interactions",
    'storybook-dark-mode'
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  webpackFinal: async (config) => {
    config.output.publicPath = 'https://redwerk.github.io/redwerk-ui-/';
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = 'https://redwerk.github.io/redwerk-ui-/';
    return config;
  },
}

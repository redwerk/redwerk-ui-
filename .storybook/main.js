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
  staticDirs: ['../stories/examples'],
  webpackFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/redwerk-ui-/';
    }

    return config;
  },
  managerWebpack: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.output.publicPath = '/redwerk-ui-/';
    }

    return config;
  },
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/redwerk-ui-/';
      config.target = ['edge90', 'chrome90', 'firefox90', 'safari15'];
    }

    return config
  },
}

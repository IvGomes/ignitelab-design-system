module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  // Informando que o final da url que indica o nome do repo, não é uma pasta e sim um caminho absoluto
  viteFinal: (config, {configType}) => {
    if (configType == 'PRODUCTION') {
      config.base = '/ignitelab-design-system/'
    }

    return config
  }
}
const path = require("path");
const root = path.resolve(__dirname, "..");
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.resolve.alias["react-native$"] = "react-native-web";
    // config.resolve.alias["native-base"] = path.resolve("../src");
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      include: path.resolve(root, "src"),
      use: "babel-loader",
    });
    config.resolve.alias["@expo/vector-icons"] =
      "react-native-vector-icons/dist";
    // Return the altered config
    return config;
  },
  stories: [
    "../src/storybook/stories/**/**/**/*.stories.mdx",
    "../src/storybook/stories/**/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

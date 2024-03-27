const path = require(`path`);
const DotEnv = require("dotenv");
const webpack = require("webpack");

const env = DotEnv.config({ path: `./.env` }).parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next.trim()}`] = JSON.stringify(env[next].trim());
  return prev;
}, {});

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      Components: path.resolve(__dirname, "src/components"),
      Slice: path.resolve(__dirname, "src/slice"),
      Api: path.resolve(__dirname, "src/api"),
      Screens: path.resolve(__dirname, "src/screens"),
      Styles: path.resolve(__dirname, "src/styles"),
      Services: path.resolve(__dirname, "src/services"),
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  },
};

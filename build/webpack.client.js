const path = require("path");
const basicConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve("public")
  }
};
module.exports = webpackMerge(basicConfig, clientConfig);
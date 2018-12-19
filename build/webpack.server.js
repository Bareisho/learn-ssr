const path = require("path");
const basicConfig = require("./webpack.base.js");
const webpackMerge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals"); //处理express等，不要打包到output中
const serverConfig = {
  target: "node",  //指定服务端node环境
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist")
  },
  externals: [nodeExternals()]
};
module.exports = webpackMerge(basicConfig, serverConfig);
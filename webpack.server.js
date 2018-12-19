const path = require("path");
const nodeExternals = require("webpack-node-externals"); //处理express等，不要打包到output中
module.exports = {
  target: "node",  //指定服务端node环境
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js?$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: [
          "@babel/preset-react", //让babel支持编译react
          ["@babel/preset-env", {
            targets: {
              browsers: "last 2 versions" //让babel兼容主流浏览器的最新2个版本
            }
          }]
        ]   
      }
    }]
  }
}
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  },
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
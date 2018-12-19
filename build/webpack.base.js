
module.exports = {
  mode: "development",
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
};
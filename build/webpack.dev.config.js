const path = require("path")
const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.config")

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8080,
    open: true,
    hot: true,
    stats: 'errors-only', //通过此选项，您可以精确控制显示哪些捆绑软件信息。如果您需要一些捆绑软件信息，但又不是全部，这可能是很好的中间立场。要仅显示捆绑软件中的错误
    contentBase: path.resolve(__dirname, "../dist"),
    proxy: {
      "/api": {
        target: "http://39.97.33.178"
      }
    }
  }
})
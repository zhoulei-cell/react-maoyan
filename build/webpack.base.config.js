const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")
module.exports = {
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[hash].js"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    },
    extensions: [".js", ".jsx", ".json", ".css"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", {
          loader: "postcss-loader",
          options: {
            plugins: [
              require('autoprefixer')
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "maoyan",
      filename: "index.html",
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new CleanWebpackPlugin()
  ]
}
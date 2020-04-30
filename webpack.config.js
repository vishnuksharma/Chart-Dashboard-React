const path = require("path"),
  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress:
      true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/public")
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') })
  ]
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/glsl", to: "glsl" },
        { from: "src/assets", to: "assets" }
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

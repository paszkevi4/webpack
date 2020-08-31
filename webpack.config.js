var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    //main: './src/index.js',
    //index: './src/index1.js',
    hw1: './src/hw1/index.js',
    hw2: './src/hw2/index.js',
    hw4: './src/hw4/index.js',
    hw5: './src/hw5/index.js',
    hw7: './src/hw7/index.js',
    hw11: './src/hw11/index.js',
    hw13: './src/hw13/index.js',
  },
  output: {
    path: path.resolve(__dirname, `dist/`),
    filename: '[name]/[name].js',
  },
  devServer: {
    contentBase: './dist',
    port: '1337',
  },
  plugins: [
    new CleanWebpackPlugin(),
    //new HtmlWebpackPlugin({ filename: './index.html', template: './index.html', inject: false }),
    new HtmlWebpackPlugin({
      title: 'hw1',
      filename: './hw1/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw1'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw2',
      filename: './hw2/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw2'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw4',
      filename: './hw4/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw4'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw5',
      filename: './hw5/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw5'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw7',
      filename: './hw7/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw7'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw11',
      filename: './hw11/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw11'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw13',
      filename: './hw13/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw13'],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};

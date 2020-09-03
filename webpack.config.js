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
    hw3: './src/hw3/index.js',
    hw4: './src/hw4/index.js',
    hw5: './src/hw5/index.js',
    hw6: './src/hw6/index.js',
    hw7: './src/hw7/index.js',
    hw8: './src/hw8/index.js',
    hw9: './src/hw9/index.js',
    hw11: './src/hw11/index.js',
    hw12: './src/hw12/index.js',
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
      title: 'hw3',
      filename: './hw3/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw3'],
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
      title: 'hw6',
      filename: './hw6/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw6'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw7',
      filename: './hw7/index.html',
      template: './index.html',
      inject: 'body',
      chunks: ['hw7'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw8',
      filename: './hw8/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw8'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw9',
      filename: './hw9/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw9'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw11',
      filename: './hw11/index.html',
      template: './index.html',
      inject: true,
      chunks: ['hw11'],
    }),
    new HtmlWebpackPlugin({
      title: 'hw12',
      filename: './hw12/index.html',
      template: './src/hw12/index.html',
      inject: true,
      chunks: ['hw12'],
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

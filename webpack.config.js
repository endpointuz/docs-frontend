const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/icons.js'),
    },
  },
  // devtool: 'sourcemap-inline',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        loader: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            // options: {
            //   sourceMap: true,
            // },
          },
          {
            loader: 'less-loader',
            // options: {
            //   sourceMap: true,
            // },
          },
        ],
      },
    ],
  },
};

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            // CSS loading
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
            // Image loading
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            // Used for mapping out HTML items before coding .js
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]', // Keep the original file name and extension
                  },
                },
              ],
          },
            // Font loading
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],
  };
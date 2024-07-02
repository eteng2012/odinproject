const path = require('path');
const toml = require('toml');
// Same for yamljs and json5

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
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
            type: 'asset/resource',
          },
            // Font loading
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
            // Data loading for csv and xml
          {
            test: /\.(csv|tsv)$/i,
            use: ['csv-loader'],
          },
          {
            test: /\.xml$/i,
            use: ['xml-loader'],
          },
          {
            test: /\.toml$/i,
            type: 'json',
            parser: {
              parse: toml.parse,
            },
          },
            // Same for jamljs and json5
        ],
      },
    // New node for html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // title: 'html-webpack-plugin title tag',
            // Not needed as template has title set
            inject: 'body'
            // Injects new elements to bottom of body tag
        })
    ]
};
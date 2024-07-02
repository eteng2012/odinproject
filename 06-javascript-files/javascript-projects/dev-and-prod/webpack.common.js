const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // Multiple entry points
    entry: {
      index: './src/index.js',
      print: './src/print.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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
    ],
};
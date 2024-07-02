const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    // Source Map
    devtool: 'inline-source-map',
    // serves files to localhost:8080
    devServer: {
    static: './dist',
    watchFiles: ['src/*.html'],
    },
    optimization: {
        runtimeChunk: 'single',
      },
});
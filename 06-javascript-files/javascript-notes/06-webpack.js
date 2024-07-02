// Last lesson about first half of webpack: bundling modules

// Webpack can also process and manipulate code while bundling
    // Can use PostCSS or Sass to write CSS code
    // Minify and uglify code



// Bundling

// Give webpack entry point, build dependency graph based on import/export, bundles .js file in dist

// Straightforward if just JS, but what if need CSS or assets like fonts?

// CSS can import .css directly into JS, asset can be used in CSS or imported into JS

// Webpack will bundle these files and copy assets into dist
    // However, these files are not JS, webpack does not know how to process unless you include correct loader/rule



// HTML-webpack-plugin

// Keep development work in src, so how to handle HTML files?

// Need loader/rules for CSS/assets, can use html-webpack-plugin to build HTML in dist

// html-webpack-plugin also auto adds output bundle in <script> among other things
    // Default is just boilerplate with extras
    // OVERWRITES dist/index.html!
        // To preserve, tell it to use template and provide own path to HTML file in src
        // Example:
            // webpack.config.js

            // const HtmlWebpackPlugin = require('html-webpack-plugin');

            // // ...
            //     plugins: [
            //         new HtmlWebpackPlugin({
            //             template: './src/template.html',
            //         }),
            //     ],
            // // ...



// Managing Website Assets

    // To import CSS file from JS module, install following loaders:
        // npm install --save-dev style-loader css-loader

    // Add module to .config.js

    // Module loaders can be chained, each applies tranformation, executed in reverse order
        // Javascript file shoul dbe returned at last loader for the webpack
    
    // Above allows import './style.css' into file needing styling

    // Look at asset-management for example work

    // Loading in assets allows grouping of similar module/asset in intuitive way



// Setting up HTML Webpack Plugin

    // 1. npm install --save-dev html-webpack-plugin
    // 2. Go to webpack config, import html-webpack-plugin
        // Add node called plugins, take in array and use new HtmlWebpackPlugin()
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



// Webpack Development

    // Set development environment to make things easier
    // THESE TOOLS ONLY FOR DEVELOPMENT, NOT PRODUCTION

    // Source Maps
        // When bundling source code, can be difficult to track down errors to original location
        // Source maps map compiled code to original source code
        // devtool: 'inline-source-map' is an example of one 

    // Auto Compile Code when Changes
        // 1. Watch Mode
            // In scripts: "watch": "webpack --watch",
                // Watches files for changes, ONLY APPLIED WHEN PAGE RELOADED
        // 2. webpack-dev-server (best)
            // npm install --save-dev webpack-dev-server
            // Add to module.exports: 
                // devServer: {
                //     static: './dist',
                // },
                // optimization: {
                //     runtimeChunk: 'single',
                // },
            // Optimization used because more than one entry point
            // dev-server does not write output files, it instead keeps bundle files in memory, 
                // serves them as if they were real files

            // IF USING HTML-plugin, NEED TO ADD .html TO WATCHED FILES
                // P t: watchFiles: ['src/*.html'], in devServer to watch for changes in index.html in src
        // 3. webpack-dev-middleware, explore later when using Express server



// Webpack Production

    // Development = strong source mapping, localhost server with live reloading
    // Production = minified bundles, light weight source maps, optimized assets for load time
    // Therefore, SEPARATE WEBPACK CONFIGS for each environment
    // However, use common config for DRY
        // Use webpack-merge to merge config
            // npm install --save-dev webpack-merge
            // Make different webpack._.js files: common, dev, prod. Use merge
            // Change scripts in package.json (this is because no webpack.config.js, so set manually)
    // Specifying mode changes how much optimization/logging/testing libraries do
        // Can check mode in .js source file with string variable: process.env.NODE_ENV

    // Good to have source map enabled in prod, useful for debug/benchmarking
        // However, use: source-map instead of inline-source-map, for performance

    // MINIMIZE CSS FOR PROD



// Some other features to look at for webpack include:
    // Code Splitting = split code into bundles, loaded on demand or in parallel
        // Controls resource/load priority
    // Tree Shaking = dead-code elimination
    // Lazy Loading = on-demand loading, split code at logical breakpoints, load when user did something to need code
    
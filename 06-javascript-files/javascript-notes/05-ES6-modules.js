// Not module pattern, (self-contained modules of code to make public/private variables)

// Modules is feature with ES6



// Modern Javascript Explained

// When using JS libraries, download library and put in folder, add script tag to HTML with library

// npm is package manager
    // npm init
    // npm install moment --save (downloads all code from package into node_modules, modifies package.json 
        // to keep track of library as dependency)

    // When sharing project, can just share package.json, other developers can install required packages with
        // npm install

    // Then include library in script in html

// If don't want to manually include, can use ecosystem for JS outside browser

    // Allows JS to import/export code across files like most programming languages w/o global variables
        // Common implementatino is node.js

    // node.js is JS runtime designed to run on server
    // Allows direct loading into JS file
        var moment = require('moment');
        console.log("Hello from JavaScript!");  
        console.log(moment().startOf('day').fromNow());

    // node.js knows location of each npm module path, so can just write require("name");

// If want to use require, no node.js, can use module bundler
    // Tool that has build step with access to file system and final output which doesnt need, browser compatible
    // Finds all require statements and replaces then with actual contentx, makes bundled JS file

    // Most popular right now is webpack, is npm package
        // npm install webpack webpack-cli --save-dev
            // Downloads cli version to allow cmd use, --save-dev to sav dependency
        // ./node_modules/.bin/webpack index.js --mode=development
            // Runs webpack tool in node_modules on index.js to fin
        // Use webpack output instead of normal js file
        // To recompile, use ./node_modules/.bin/webpack
        // Runtime improvement of just importing one js bundle

// Transpiling code for new language features
    // Coverting code in one language to another, important as many new experiemental languages made in front-end
    // babel transpiles new JS features to older JS versions
    // npm install @babel/core @babel/preset-env babel-loader --save-dev
        // core, which features to transpile, and working with webpack
    // Can config webpack to use babel
        // Code: https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html

// Task runner
    // Tool that automates above build process, npm itself can do this
    // Change package.json
        // "build": "webpack --progress --mode=production",
        // "watch": "webpack --progress --watch"
    // npm run build to run webpack
    // npm run watch to rerun

// webpack-dev-server
    // simple web server with live reloading
    // npm install webpack-dev-server --save-dev
    // "serve": "webpack-dev-server --open"   to .json
    // npm run serve
    // Address automatically localhost:8080, change in .js webpack rebuilds js, refreshes browser automatically



// npm = node package manager
    // Is software registry
    


// package.json file
    // List packages project dpeends on with versions, makes project reproducible
    // To make this file, run npm init
        // On cmd, navigate to root of package, run npm init
    // If will make many of these files, can customize questions so all files have standardized info
    // Example
        // {
        //     "name": "my-awesome-package",
        //     "version": "1.0.0",
        //     "author": "Your Name <email@example.com>"
        // }

    // Make default package.json file with npm init --yes
        // name: the current directory name
        // version: always 1.0.0
        // description: info from the README, or an empty string ""
        // scripts: by default creates an empty test script
        // keywords: empty
        // author: empty
        // license: ISC
        // bugs: information from the current directory, if present
        // homepage: information from the current directory, if present
        


// devDependencies and dependencies
    // devDependencies are like babel, only needed during development and not production
    // dependencies needed during bundling, needed during runtime



// Webpack and Bundlers
    // Projects so far basic file structures
    // Organization important for complex projects
        // Single long file broken up into multiple smaller files
    // Issue is separate HTTP request for each file
        // More files = slower
    // Bundlers take multiple files/libraries and combine them into fewer files

    // Bundlers take starting file and build dependency graph of modules/dependecies starting from file
        // Combine into single output
        // Multiple entry points = one for each

    // Webpack of one tool, powerful but complex



// Webpack Getting Started Code-Along
    // 1. Make directory, init npm, install webpack and webpack-cli
    // 2. Get basic code with .js file that uses Lodash library
    // 3. Set package.json with private = true, main deleted to stop publishing
    // 4. Implicit dependencies for this code, issue is no signal that dependent on external library
        // Use webpack to manage scripts
    // 5. Format by separating the source code (.js, write/edit) from distribution code (.html, optimized output)
    // 6. Use npm install --save lodash to install library
        // Use npm install --save to bundle to production bundle
        // If install for dev purposes, use npm install --save-dev
    // 7. Modify .js and .html to include library
    // 8. Webpack uses the import line in .js to make dependency graph, makes optimized bundle
    // 9. Run npx webpack, takes src/index.js script as entry point, generates dist/main.js as output
    // Library should now work

// Import/export standardized



// Most projects need more complex setup, so webpack supports config file
    // webpack.config.js
    // Example:
        const path = require('path');

        module.exports = {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        };
    // Then run: npx webpack --config webpack.config.js
    // Webpack picks up config by default, dont need --config webpack.config.js
        // Only need if file name different???



// To automate running webpack, use npm script in package.json
    // "build": "webpack"
    // Then run: npm run build



// src = source directory, all code that webpack bundles
    // Webpack goes through and looks for import statement in files, compiles all files into one file in dist folder
    // Entry is the files given to webpack to check for import, Output is export

// Default config for webpack is using src/index.js as the entry point



// ES6 Modules

// Handles multiple JS files for single page in browser
    // Outside browser can use Node, which uses CommonJS modules

// ES6 Modules (ESM) work both in and out of browser
    // Two components are import and export
    // Already familiar with import through webpack, importing libraries


    // Example:
    // a file called functionOne.js
    const functionOne = () => console.log('FUNCTION ONE!');

    export { functionOne };

    // another JS file
    // Note: You can only use single quotes (') or double quotes (") for import statements 
    import { functionOne } from './functionOne';

    functionOne(); // this should work as expected!


    // Can use export to export functions from .js files to other .js files

// This is useful as allows for code resue

// No longer have to use module pattern (IIFEs)

// Only what is exported can be imported    
    // Declarations made not auto added to global scope
    // Keeps code cleanly separated
        // export default name; exports one function called name
        const myName = (name) => 'Hi! My name is ' + name; 
        // Arrow function declaration
        
        export default myName;



// Default vs. Named Exports

    // Choose based on what exporting

    // Named Exports
        // Must have distinct names
            export { myFunction2, myVariable2 };
        // Can export variables before declaring
        // Can declare variables/functions after export
            export let myVariable = Math.sqrt(2);
    
    // Default Exports
        // export { myFunction as default };  ==  export default myFunction;
        // Can only have one default
        // Allows any expression
        // Function/classes exported as declaration, not expression
            // Can use anonymous (unnamed) functions
                // export default function () {
                //     console.log("Hi");
                // }
            // If function defined in the export, function is hoisted
                // This means that interpreter moves declaration to top of scope, before executing code
            
    // Named useful for exporting several values
        // Can rename
            export { myFunction as function1, myVariable as variable };

// Use barrel modules to make single module concentrating exports from other modules
    // Use: export { default as function1, function2 } from "bar.js";
        // function1 default, function2 named
    // Same as: import { default as function1, function2 } from "bar.js";
            //export { function1, function2 };
    // Except, first one can't use the functions
    // Use export * from "mod" to export all
        // Only exports named exports
    
    // If conflicting names in export statements, neither exported

// To export the default, use: export { default as DefaultExport } from "bar.js";



// In practice, just use named exports, group into barrel with export * from ..., then import with:
    // import * as ns from "./barrel.js";



// Imports

    // Named Import: 
        // import { foo, bar } from "/modules/my-module.js";
        // import { LongModuleExportName as shortName } from "/modules/my-module.js";

    // Default Import:
        // import myDefault from "/modules/my-module.js";
        // import myDefault, * as myModule from "/modules/my-module.js";
            // This imports both named and default
        // import { default as myDefault } from "/modules/my-module.js";
            // This is same as first

    // Namespace Import:
        // import * as myModule from "/modules/my-module.js";

    // Side-Effect Import:
        // import "/modules/my-module.js";
            // Used for global variable mutation, doesn't import values
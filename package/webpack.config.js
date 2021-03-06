/**
 * Created by Vidailhet on 17/06/16.
 */

'use strict';

var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: [
        './src/GLAngularHttpResponseErrorInterceptor.ts',
        './src/Filters/HttpResponseErrorFilter.ts',
        './src/Filters/HttpResponseErrorRetryFilter.ts'
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "SecureFileStorageService.js"
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js'],
        alias: {}
    },
    resolveLoader: {
        modulesDirectories: ["node_modules"]
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true
        })
    ],
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'awesome-typescript-loader'
        }
        ],
        noParse: []
    }
};

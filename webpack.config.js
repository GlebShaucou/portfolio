'use strict';

const webpack = require('webpack');

module.exports = {
    entry: './app/entry',
    output:  {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        library: 'globals'
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: 'cheap-inline-module-source-map',

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    ],

    module: {
        loaders: [{ 
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
};
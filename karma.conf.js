/**
 * Created by Hyiero on 12/10/2016.
 */

var webpackConfig = require('./webpack.config.test');
var path = require('path');

module.exports = function(config){
    "use strict";
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './tests.webpack.js'
        ],
        preprocessors: {
            './tests.webpack.js': ['webpack','sourcemap']
        },
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        webpack: webpackConfig,
        reporters: ['progress','coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    })
};
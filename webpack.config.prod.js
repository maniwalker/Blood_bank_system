var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //This is the absolute path to your application's source files
    context: __dirname,
    //Declaring that we will be using source-maps
    devtool: 'source-map',
    //This is the name/entry point for where your apps modules begin
    entry: {
        app: ['./app/index.js'],
        vendor: ['angular','angular-ui-router']
    },
    //This is where you decide where the bundles will be output and the name of your bundles
    output: {
        path: path.join(__dirname + '/dist'),
        filename: '[name].[hash].bundle.js' //For Prod Webpack config add [hash] here.
    },
    resolve: {
        modulesDirectories: ['node_modules','app'],
        extension: ['','.js','.css']
    },
    module : {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loaders: ['style','css']
            },{
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].[hash].bundle.js',
            minChunks: Infinity
        })
    ]
};
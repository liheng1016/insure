/**
 * Created by able on 2016/5/19 0019.
 */
var path = require('path');
var webpack = require("webpack");
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var values = require('postcss-modules-values');
var postcssImport = require('postcss-import');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        app: [
            path.resolve(__dirname, '../main.js')
            // path.resolve(__dirname, '../test/main.js')
            // path.resolve(__dirname, '../test-module/main.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/js'),
        publicPath: '/build/js/',
        // path: path.resolve(__dirname, '../Static/js'),
        // publicPath: '/Static/js/',
        filename: 'app.js'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, '../node_modules'),
                ],
                include: [
                    path.resolve(__dirname, '../../App/'),
                    path.resolve(__dirname, '__test__')
                ],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test:function(path){
                   var reg = /quill\.(core|snow)\.css$/
                   return reg.test(path);
                },
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            // { test: /\.css$/, loader: 'style-loader!css-loader?modules!postcss-loader' },
            {
                // test: /\.css$/,
                test:function(path){
                    return /\.css$/.test(path)&&!/quill\.(core|snow)\.css$/.test(path)
                },
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader'),
               
            }, 
            {
                test: /\.(png|jpg|gif)\??.*$/,
                loader: "file-loader"
            }, {
                test: /\.json$/,
                loader: "json-loader"
            },
        ]
    },
    postcss: [values],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify('production')
            'process.env.NODE_ENV': JSON.stringify('develop'),
            // 'LOCAL_DOMAIN':JSON.stringify('http://statistic.com')
            'PATH_PREFIX':JSON.stringify(''),
            'LOCAL_DOMAIN':JSON.stringify('http://insur_tp.com'),
            // 'LOCAL_DOMAIN':JSON.stringify('http://middle.insurance.test.csgrid.cn')

        }),
        new ExtractTextPlugin("[name].css"),

    ],
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    }
}

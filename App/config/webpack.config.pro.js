/**
 * Created by able on 2016/5/19 0019.
 */
'use strict';

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var values = require('postcss-modules-values');
var postcssImport = require('postcss-import');
var PLATFORM_NAME = '保险产品';
function getDateString() {
    let dateObj = new Date();
    return dateObj.toLocaleDateString().replace(/-|\//g, '') + dateObj.getHours() + dateObj.getMinutes();
}

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        app: [
            'babel-polyfill',
            path.resolve(__dirname, '../main.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build/js/'),
        publicPath: '/build/js/',
        // filename:'app.js'
        filename: "[name]-" + getDateString() + ".js",
        chunkFilename: "bundle-[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    path.resolve(__dirname, '../node_modules'),
                ],
                include: [
                    path.resolve(__dirname, '../'),
                ],
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&minimize!postcss-loader')
            },
            {test: /\.(png|jpg|gif)\??.*$/, loader: "file-loader"},
            {test: /\.json$/, loader: "json-loader"},
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextPlugin("[name]-[contenthash].css"),
        new HtmlWebpackPlugin({
            title: PLATFORM_NAME,
            filename: path.resolve(__dirname, '../build/index.html'),
            inject: 'body',
            // favicon: path.resolve(__dirname, './icon.png'),
            templateContent: function (templateParams, compilation) {
                let html = '<!DOCTYPE html>';
                html += '<html lang="zh-CN">';
                html += '<head>';
                html += '<meta name="renderer" content="webkit"/>';
                html += '<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />';
                html += ' <title>' + PLATFORM_NAME + '</title>';
                html += '</head>';
                html += '<body>';
                html += '<div id="root" class="root"></div>';
                html += '<script type="text/javascript" src="/build/lib/xls.min.js"></script>';
                html += '<script type="text/javascript" src="/build/lib/xlsx.core.min.js"></script>';
                html += '<script type="text/javascript" src="/build/lib/highcharts.js"></script>';
                html += '<script src="http://webapi.amap.com/maps?v=1.3&key=57263d2a64c3e10d5fc13819ed372b00" async defer></script>';
                html += '</body>';
                html += '</html>';
                return html;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
                dead_code: true,
                drop_debugger: true,
                unused: true,
                collapse_vars: true,
                drop_console: true,
            },
            comments: true,
        })
    ]
};

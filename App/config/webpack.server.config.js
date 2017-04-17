var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.config.dev.js');
var path = require('path');
config.entry.app.unshift('webpack-dev-server/client?http://localhost:9090/', 'webpack/hot/dev-server');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    'hot': true,
    'watch-delay': 200,
    'headers': {
        'Access-Control-Allow-Origin': '*',
    },
    'no-info': false,
    'content-base': '../',
    'filename': 'app.js',
    'quiet': true,
    'publicPath': "/Static/js/",
});
server.listen(9090);

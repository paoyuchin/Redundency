const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.dev.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const UglifyJsSetting = new UglifyJsPlugin({
    uglifyOptions: {
        cache: true,
        parallel: true,
        compress: {
            // drop_console: true,
        },
        output: {
            comments: false,
            beautify: false,
        }
    }
});

module.exports = Merge.smartStrategy({
    entry: 'replace'
})(CommonConfig, {
    mode: 'production',
    entry: {
        app: './production.js',
    },
    output: {
        filename: '[name].js',
    },
    plugins: [
        UglifyJsSetting,
        new BundleAnalyzerPlugin()
    ]
});
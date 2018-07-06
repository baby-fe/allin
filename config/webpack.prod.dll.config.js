"use strict";
let path = require('path');
let webpack = require('webpack');
const fs = require('fs-extra');
let paths = require('./paths');
const AssetsPlugin = require('assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清空发布目录
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

fs.emptyDirSync(paths.appBuild);

module.exports = {
    entry: {
        vendor: ['react', 'react-dom','react-router','react-redux',"react-router-dom","redux-thunk","react-router-redux","redux"]
    },
    output: {
        path: paths.appBuild,
        filename: '[name].[hash].js',
        /**
         * output.library
         * 将会定义为window.${output.library}
         * 在这次的例子中,将会定义为'window.vendor_library',
         */
        library: '[name]_library'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV)
            }
        }),
        //清空发布目录
        new CleanWebpackPlugin(['build'], {
           root: '', // An absolute path for the root  of webpack.config.js
           verbose: true,// Write logs to console.
           dry: false // Do not delete anything, good for testing.
        }),
        new webpack.DllPlugin({
            /**
             * path
             * 定义manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(paths.appBuild,'[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可
             */
            name: '[name]_library'
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: paths.appBuild
        }),
        //使用压缩丑化js插件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$scope', '$']
            }
        }),
    ]
};

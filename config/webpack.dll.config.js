"use strict";
let path = require('path');
let webpack = require('webpack');
let paths = require('./paths');
const AssetsPlugin = require('assets-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
    entry: {
        vendor: ['react', 'react-dom','react-router','react-redux',"react-router-dom","react-router-redux","redux"]
    },
    output: {
        path: path.join(__dirname, 'dev'),
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
        new webpack.DllPlugin({
            /**
             * path
             * 定义manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join('../dev','[name]-manifest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可
             */
            name: '[name]_library'
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: path.join(__dirname, 'dev')
        }),
    ]
};

/**
 ** ********************************************************
 ** @file webpack.dev.js
 ** @author chentong <chentong@zuzuche.com>
 ** @date 2018-04-25 16:16:24
 ** @last_modified_by chentong <chentong@zuzuche.com>
 ** @last_modified_date 2018-04-25 16:46:55
 ** @copyright (c) 2018 @fe/my-first-react
 ** ********************************************************
 */

const path = require('path');
const root = __dirname;
// 引入html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // 入口文件
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        path.resolve(root, 'src/main.js')
    ],
    // 出口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(root, 'dist'),
        publicPath: '/'
    },
    // loaders
    module: {
        rules: [
            {
                test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/
            }
        ]
    },
    devServer: {
        hot: true, // 激活服务器的HMR
        contentBase: path.resolve(root, 'dist'),
        publicPath: '/',
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React Demo',
            template: path.resolve(root, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(), // 热替换插件
        new webpack.NamedModulesPlugin() // 执行热替换时打印模块名字
    ]
};

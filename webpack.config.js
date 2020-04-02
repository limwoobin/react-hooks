// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename: 'bundle.js',
        path:__dirname + '/build'
    },
    mode: 'none',
    resolve:{
        extensions: [".jsx" , ".js"]
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test:/\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {minimize: true}
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true
    }   
};
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;
const path = require('path');

module.exports = {
    mode:'none',
    entry: [
        './src/index.js',
    ],
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/build'),
        publicPath: '/',
    },
    resolve:{
        extensions: [".jsx" , ".js" , ".tsx" , ".ts"]
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:['babel-loader']
            },
            {
                test:/\.tsx$/,
                exclude:/node_modules/,
                use:['ts-loader']
            },
            {
                test: /\.(css|scss)$/,
                exclude: /node_modules/,
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                use: ['file-loader']
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
            template: './public/index.html',
            favicon: './public/favicon.png',
            filename: 'index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
        historyApiFallback: true,
        // proxy : {
        //     "**" : "http://localhost:4000"
        // }
    }   
};
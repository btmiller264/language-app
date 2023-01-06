const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.tsx'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.([jt]s|tsx)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'public/index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
}
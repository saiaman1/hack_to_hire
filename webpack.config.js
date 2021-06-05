var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    mode: 'development',
    entry: {
        bundle: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        port: 5043,
        historyApiFallback: true,
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ttf|woff2|eot|woff|png|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3000,
                        }
                    }
                ]
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'css-loader', options: { minimize: true } }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]'
                            }
                        },
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                    },
                    require.resolve('sass-loader'),
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
    ]
}

module.exports = config;
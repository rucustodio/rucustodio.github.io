var path = require('path'),
    webpack = require('webpack'),
    helpers = require('./config/helpers')
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'polyfills' : './app/polyfills.ts',
        'main': './app/main.ts',
        'vendor' : './app/vendor.ts',
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, 'app')
                ],
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            { 
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"],
                })
            },
            {
                test: /\.(jpg|png|gif|woff)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./'),
            {}
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['main', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: helpers.root('index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
    watch: true
};
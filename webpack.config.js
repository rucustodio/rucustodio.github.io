var path = require('path'),
    webpack = require('webpack'),
    helpers = require('./config/helpers')
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, './'),
        publicPath: '',
        filename: 'app.js',
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        modules: [path.resolve(__dirname, 'node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: ['awesome-typescript-loader']
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
                    use: [
                        { loader: "css-loader", options: { minimize: true } }, 
                        "sass-loader"
                    ],
                })
            },
            {
                test: /\.(jpg|png|gif|woff|svg)$/,
                use: 'file-loader'
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: helpers.root('index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
    // Turn this back on when you bundle this differently into chunks
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    watch: true,
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
};
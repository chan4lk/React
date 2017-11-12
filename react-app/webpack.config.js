const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    dist: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
    js: path.resolve(__dirname, 'src/js')
};

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(paths.src, 'index.html'),
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin('style.bundle.css');

const config = {
    entry: path.join(paths.js, 'app.js'),
    output: {
        path:  paths.dist,
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, loader: ExtractTextPlugin.extract({use: 'css-loader'})},
            { test: /\.(png|jpg|gif)$/, use: 'file-loader'},
        ]
    },
    plugins: [HtmlWebpackPluginConfig, ExtractTextPluginConfig]
};

module.exports = config;

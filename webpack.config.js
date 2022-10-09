const webpack = require("webpack");
const path= require("path");

module.exports = {
    entry: {
        index: './src_js/index.js',
        search:"./src_js/search.js"
    },
    output: {
        path: path.join(__dirname, '/src_output/js'),
        filename: '[name].bundle.js', 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
      }
};
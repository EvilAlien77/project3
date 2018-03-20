var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './main.scss',
    output: {        
        filename: 'bundle.js'
    },
    module: {
        rules: [{
             test: /\.scss$/,
             use: ExtractTextPlugin.extract({
                 fallback: 'style-loader',
                 use: 'css-loader!sass-loader'
             })
        }]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}
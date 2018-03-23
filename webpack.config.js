const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
    entry: {
        "app.header": './src/js/app.header.js',
        "app.bottom": './src/js/app.bottom.js',
        "app.integrations": './src/js/app.integrations.js'
    },
    output: {
        path: __dirname + '/',
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                loaders: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(svg|gif|jpg|png|eot|woff|ttf)$/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        extractCSS
    ]
};
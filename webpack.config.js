const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/main.js'
    },
    output: {
        path: __dirname + '/dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            cache: false
        }),
        new ScriptExtHtmlWebpackPlugin({
            inline: [/\.(js|css)$/],
        })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    }
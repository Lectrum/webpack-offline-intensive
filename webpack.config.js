// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * object
 * function
 * promise
 */
module.exports = Promise.resolve({
    mode:    'none',
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            template: './static/template.html',
            title:    'Учим вебпак! 💪🏼🌟🔫',
        }),
    ],
});

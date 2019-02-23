// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * object
 * function
 * promise
 */
module.exports = async () => {
    await delay(2000);

    return {
        mode:    'none',
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Учим вебпак! 💪🏼🌟🔫',
            }),
        ],
    };
};

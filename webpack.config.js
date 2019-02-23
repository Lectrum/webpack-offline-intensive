// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * object
 * function
 * promise
 */
module.exports = (env) => {
    console.log('→ env', env);

    return {
        mode:    'none',
        devtool: false,
        output:  {
            filename: 'build.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title:    'Учим вебпак! 💪🏼🌟🔫',
            }),
        ],
    };
};

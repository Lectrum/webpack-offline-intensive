// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';

// Constants
import { BUILD, STATIC } from '../constants';

/**
 * object
 * function
 * promise
 */
export default () => {
    return {
        output: {
            path:     BUILD,
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use:  [ 'style-loader', 'css-loader' ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${STATIC}/template.html`,
                title:    'Учим вебпак! 💪🏼🌟🔫',
            }),
        ],
    };
};

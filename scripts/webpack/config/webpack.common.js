// Core
import { DefinePlugin } from 'webpack';
import merge from 'webpack-merge';

// Constants
import { BUILD } from '../constants';

// Modules
import * as modules from '../modules';

/**
 * object
 * function
 * promise
 */
export default () => {
    return merge(
        {
            output: {
                path:          BUILD,
                filename:      'js/bundle.[chunkhash:5].js',
                chunkFilename: 'js/bundle.[chunkhash:5].js',
                publicPath:    '/',
            },
            plugins: [
                new DefinePlugin({
                    TWO:             '1+1',
                    TWO_STRINGIFIED: JSON.stringify('1+1'),
                    TRUE_SIMPLE:     true,
                    __FEATURE__:     JSON.stringify(true),
                }),
            ],
        },
        modules.connectHtml(),
        modules.loadJavaScript(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.loadFonts(),
    );
};

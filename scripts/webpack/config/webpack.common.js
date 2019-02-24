// Core
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
                path:       BUILD,
                filename:   'js/bundle.[chunkhash:5].js',
                publicPath: '/',
            },
        },
        modules.connectHtml(),
        modules.loadJavaScript(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.loadFonts(),
    );
};

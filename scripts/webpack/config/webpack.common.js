// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

// Constants
import { BUILD, STATIC } from '../constants';

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
                path:     BUILD,
                filename: 'bundle.js',
            },
        },
        modules.connectHtml(),
        modules.loadJavaScript(),
        modules.loadCss(),
        modules.loadImages(),
        modules.loadSvg(),
        modules.loadFonts(),
    );
};

// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

// Constants
import { PROJECT_ROOT, SOURCE } from '../constants';

// Config
import getCommonConfig from './webpack.common';

export default () => {
    return merge(getCommonConfig(), {
        mode:    'none',
        devtool: false,
        entry:   [ SOURCE ],
        plugins: [
            new CleanWebpackPlugin([ 'dist', 'build' ], {
                root:    PROJECT_ROOT,
                verbose: true,
            }),
        ],
    },
    // loadProdCss()
    // loadImages()
    // loadFonts()
    // optimizeCss()
    // optimizeJavaScript()
    );
};

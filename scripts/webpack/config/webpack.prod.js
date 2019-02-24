// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

// Constants
import { PROJECT_ROOT, SOURCE } from '../constants';

// Modules
import * as modules from '../modules';

// Config
import getCommonConfig from './webpack.common';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'production',
            devtool: false,
            entry:   [ SOURCE ],
            plugins: [
                new CleanWebpackPlugin([ 'dist', 'build' ], {
                    root:    PROJECT_ROOT,
                    verbose: true,
                }),
            ],
        },
        modules.loadProdCss(),
        modules.optimizeBuild(),
    );
};

// Core
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

// Constants
import { PROJECT_ROOT, SOURCE, BUILD, STATIC } from '../constants';

export default () => {
    return {
        mode:    'none',
        devtool: false,
        entry:   [ SOURCE ],
        plugins: [
            new CleanWebpackPlugin([ 'dist', 'build' ], {
                root:    PROJECT_ROOT,
                verbose: true,
            }),
        ],
    };
};

// Core
import CleanWebpackPlugin from 'clean-webpack-plugin';

// Constants
import { PROJECT_ROOT, SOURCE } from '../constants';

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

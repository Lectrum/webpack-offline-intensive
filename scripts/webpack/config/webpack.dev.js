// Core
import { HotModuleReplacementPlugin } from 'webpack';

// Constants
import { SOURCE } from '../constants';

export default () => {
    return {
        mode:    'none',
        devtool: false,
        entry:   [ SOURCE, 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        plugins: [ new HotModuleReplacementPlugin() ],
    };
};

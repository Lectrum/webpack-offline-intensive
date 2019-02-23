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
        entry:   [ SOURCE, 'webpack-hot-middleware/client?reload=true&quiet=true' ],
        plugins: [ new HotModuleReplacementPlugin() ],
    };
};

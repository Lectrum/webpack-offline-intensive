export const loadCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    {
                        loader:  'css-loader',
                        options: {
                            modules:        true,
                            localIdentName:
                                '[path][name]__[local]--[hash:base64:5]',
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
});

export const loadProdCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [ 'style-loader', 'css-loader' ],
            },
        ],
    },
    plugins: [
        /** plugin */
    ],
});

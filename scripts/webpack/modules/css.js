export const loadCss = () => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                use:  [ 'style-loader', 'css-loader' ],
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

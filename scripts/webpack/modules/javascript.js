export const loadJavaScript = () => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                use:  'babel-loader',
            },
        ],
    },
});

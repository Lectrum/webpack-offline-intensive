module.exports = api => {
    api.cache.never();

    // @babel/plugin-dynamic-import

    return {
        presets: [
            [
                '@babel/env',
                {
                    debug: true,
                    modules: 'cjs', // amd, umd, cjs, esm
                },
            ],
        ],
        plugins: ['@babel/proposal-class-properties'],
    };
};

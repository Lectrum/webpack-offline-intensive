module.exports = api => {
    api.cache.never();

    // @babel/plugin-dynamic-import

    return {
        presets: [
            [
                '@babel/env',
                {
                    debug: true,
                    modules: false, // false || 'auto' = 'esm'
                },
            ],
        ],
        plugins: ['@babel/proposal-class-properties'],
    };
};

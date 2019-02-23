module.exports = api => {
    api.cache.never();

    // @babel/plugin-dynamic-import

    return {
        presets: [
            [
                '@babel/env',
                {
                    debug: true,
                },
            ],
        ],
        plugins: ['@babel/proposal-class-properties'],
    };
};

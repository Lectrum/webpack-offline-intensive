module.exports = api => {
    api.cache.never();

    // api.cache.using(() => process.env.NODE_ENV)

    // @babel/plugin-dynamic-import

    return {
        presets: [
            [
                '@babel/env',
                {
                    debug: true,
                    loose: false, // более быстрый код, меньше надёжности
                    strict: true, // менее быстрый код, больше надёжности
                    modules: false, // false || 'auto' = 'esm'
                },
            ],
        ],
        plugins: ['@babel/proposal-class-properties'],
    };
};

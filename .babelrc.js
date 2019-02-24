module.exports = api => {
    const env = api.env(); // process.env.BABEL_ENV || process.env.NODE_ENV || 'production'
    api.cache.never();
    // api.cache.using(() => env)

    const plugins = [
        '@babel/proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
    ];

    if (env === 'development') {
        plugins.push('react-hot-loader/babel');
    }

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env',
                {
                    debug: false,
                    loose: false, // более быстрый код, меньше надёжности
                    spec: true, // менее быстрый код, больше надёжности
                    modules: false, // false || 'auto' = 'esm'
                },
            ],
        ],
        plugins,
    };
};

module.exports = api => {
    api.cache.never();

    // @babel/plugin-dynamic-import

    return {
        presets: ['@babel/preset-env'],
    };
};

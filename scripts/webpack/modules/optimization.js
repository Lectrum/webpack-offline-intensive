// Core
import TerserPlugin from 'terser-webpack-plugin';

/**
 * production — оптимизация включена только в mode: 'production'
 * development — оптимизация включена только в mode: 'development'
 * ✓ — оптимизация включена в mode: 'production' и в mode: 'development'
 */
export const optimizeBuild = () => ({
    optimization: {
        // production: минификация JavaScript.
        minimize:  false,
        minimizer: [ new TerserPlugin() ],

        // production: останавливает эмит сборки при возникновении ошибки во время компиляции.
        noEmitOnErrors: true,

        // ✓ Не добавляет в сборку пустые чанки — это уменьшает нагрузку на систему, что ускоряет ребилд.
        removeEmptyChunks:      true,
        // ✓ Объединяет эквивалентные чанки.
        mergeDuplicateChunks:   true,
        // ✓ Удаляет модуль из чанка, если этот модуль присутствует в родительском чанке (то есть уже доступен).
        removeAvailableModules: true,
    },
});

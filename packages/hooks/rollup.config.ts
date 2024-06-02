import { defineConfig } from 'rollup';
import { resolve as pathResolve } from 'path';
// import typescript from '@rollup/plugin-typescript';
import typescript2 from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
    input: './src/index.ts',
    output: [
        {
            format: 'es',
            exports: 'named',
            preserveModules: true,
            preserveModulesRoot: 'src',
            dir: 'dist/es',
        },
        {
            file: 'dist/index.js',
            format: 'umd',
            name: 'solid-hooks',
        },
    ],
    plugins: [
        typescript2(),
        babel({
            babelHelpers: 'bundled',
            configFile: pathResolve(__dirname, '../../babel.config.cjs'),
            presets: ['@babel/preset-env'],
        }),
    ],
});

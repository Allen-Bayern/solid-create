import { defineConfig } from 'rollup';
import { resolve as pathResolve } from 'path';
import typescript2 from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
    input: './src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'es',
    },
    plugins: [
        typescript2(),
        babel({
            babelHelpers: 'bundled',
            configFile: pathResolve(__dirname, '../../babel.config.cjs'),
            // presets: ['@babel/preset-env', '@babel/preset-typescript'],
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.cjs', '.ts'],
        }),
    ],
});

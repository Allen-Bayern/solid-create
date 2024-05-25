import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
    input: './src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'es',
    },
    plugins: [babel(), typescript()],
});

const { resolve: pathResolve } = require('path');
const { createBasicConfig } = require('../../config');

/** @description create webpack configuration for this library */
const createConf = () => {
    const umdConf = createBasicConfig()
        .entry('src/index.ts')
        .add(pathResolve(__dirname, 'src/index.ts'))
        .end()
        .output.filename('solid-create-umd.js')
        .library('solid-create')
        .path(pathResolve(__dirname, 'dist'))
        .end();

    const cjsConf = createBasicConfig('commonjs')
        .entry('src/index.ts')
        .add(pathResolve(__dirname, 'src/index.ts'))
        .end()
        .output.filename('solid-create-cjs.js')
        .library('solid-create')
        .path(pathResolve(__dirname, 'dist'))
        .end();

    const esmConf = createBasicConfig('module')
        .entry('src/index.ts')
        .add(pathResolve(__dirname, 'src/index.ts'))
        .end()
        .output.filename('solid-create-esm.js')
        .path(pathResolve(__dirname, 'dist'))
        .end()
        .set('experiments', {
            outputModule: true,
        });

    return [umdConf, cjsConf, esmConf].map(conf => conf.toConfig());
};

module.exports = createConf();

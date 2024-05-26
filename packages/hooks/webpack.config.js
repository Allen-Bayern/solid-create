const { resolve: pathResolve } = require('path');
const { createBasicConfig } = require('../../config');

/** @description create webpack configuration for this library */
const createConf = () => {
    const umdConf = createBasicConfig()
        .entry('dist/es/index.js')
        .add(pathResolve(__dirname, 'dist/es/index.js'))
        .end()
        .output.filename('index.js')
        .library('solid-create')
        .path(pathResolve(__dirname, 'dist'))
        .end();

    // const cjsConf = createBasicConfig('commonjs')
    //     .entry('src/index.ts')
    //     .add(pathResolve(__dirname, 'src/index.ts'))
    //     .end()
    //     .output.filename('solid-create-cjs.js')
    //     .library('solid-create')
    //     .path(pathResolve(__dirname, 'dist'))
    //     .end();

    // const esmConf = createBasicConfig('module')
    //     .entry('src/index.ts')
    //     .add(pathResolve(__dirname, 'src/index.ts'))
    //     .end()
    //     .output.filename('solid-create-esm.js')
    //     .path(pathResolve(__dirname, 'dist'))
    //     .end()
    //     .set('experiments', {
    //         outputModule: true,
    //     });

    return umdConf.toConfig();
};

module.exports = createConf();

const { resolve: pathResolve } = require('path');
const { createBasicConfig } = require('../../config');

/** @description create webpack configuration for this library */
const createConf = () => {
    const basicConf = createBasicConfig()
        .entry('src/index.ts')
        .add(pathResolve(__dirname, 'src/index.ts'))
        .end()
        .output.filename('solid-create.js')
        .library('solid-create')
        .path(pathResolve(__dirname, 'dist'))
        .end();

    return basicConf.toConfig();
};

module.exports = createConf();

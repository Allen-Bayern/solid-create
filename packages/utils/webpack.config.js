const { resolve: pathResolve } = require('path');
const { createBasicConfig } = require('../../config');

/** @description create webpack configuration for this library */
const createConf = () => {
    const basicConf = createBasicConfig()
        .entry('src/index.ts')
        .add(pathResolve(__dirname, 'src/index.ts'))
        .end()
        .output.filename('solid-create-utils.js')
        .library('solid-create-utils')
        .path(pathResolve(__dirname, 'dist'))
        .end()
        .module.rule('ts')
        .test(/\.tsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .end()
        .use('ts-loader')
        .loader('ts-loader')
        .options({
            transpileOnly: true,
            happyPackMode: true,
        })
        .end()
        .end()
        .rule('js')
        .test(/\.jsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .end()
        .end()
        .end();

    return basicConf.toConfig();
};

module.exports = createConf();

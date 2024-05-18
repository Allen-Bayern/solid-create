const { resolve: pathResolve } = require('path');
const { createBasicConfig } = require('../../config');

/** @description create webpack configuration for this library */
const createConf = () => {
    const basicConf = createBasicConfig()
        .entry('./src/index.ts')
        .end()
        .output.filename('solid-create.js')
        .library('solid-create')
        .path(pathResolve(__dirname, 'dist'))
        .end()
        .module.rule('js')
        .test(/\.jsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .options({ babelrc: false })
        .end()
        .end()
        .rule('ts')
        .test(/\.tsx?$/i)
        .use('thread-loader')
        .loader('thread-loader')
        .end()
        .use('babel')
        .loader('babel-loader')
        .options({ babelrc: false })
        .end()
        .use('ts-loader')
        .loader('ts-loader')
        .options({
            transpileOnly: true,
            happyPackMode: true,
        })
        .end()
        .end()
        .end();

    return basicConf.toConfig();
};

module.exports = createConf();

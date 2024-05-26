const Config = require('webpack-chain');
const path = require('path');

/** @description to create basic configuration of webpack config */
const createBasic = (libTarget = 'umd') =>
    new Config().output
        .libraryTarget(libTarget)
        .globalObject('this')
        .end()
        .mode('production')
        .resolve.extensions.add('.js')
        .add('.json')
        .add('.jsx')
        .add('.ts')
        .add('.tsx')
        .end()
        .end()
        .module.rule('ts')
        .test(/\.tsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .end()
        .use('ts-loader')
        .loader('ts-loader')
        .end()
        .end()
        .rule('js')
        .test(/\.jsx?$/i)
        .use('babel')
        .loader('babel-loader')
        .end()
        .end()
        .end();

module.exports = createBasic;

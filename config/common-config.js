const Config = require('webpack-chain');

/** @description to create basic configuration of webpack config */
const createBasic = () =>
    new Config().output
        .libraryTarget('umd')
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

module.exports = createBasic;

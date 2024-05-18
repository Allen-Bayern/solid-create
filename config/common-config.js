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
        .end();

module.exports = createBasic;

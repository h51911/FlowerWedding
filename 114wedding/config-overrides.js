const path = require('path');
// const px2rem = require('postcss-px2rem-exclude'); 

module.exports = function override(config, env) {
    Object.assign(config.resolve.alias, {
        '@': path.resolve(__dirname, './src'),
    })

    return config;
}
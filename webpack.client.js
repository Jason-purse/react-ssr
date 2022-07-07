const path = require('path');
const {merge} = require('webpack-merge');
const config = require('./webpack.base');

const clientConfig = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["isomorphic-style-loader",{ // 注意，在服务端需要使用此loader isomorphic-style-loader
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        esModule: false
                    }
                },'postcss-loader'],
            }
        ]
    }
}

module.exports = merge(config, clientConfig);

const path = require('path');
const {merge} = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const config = require('./webpack.base');
const env = process.env.NODE_ENV || 'development'
const isDevelopment = env === 'development';
const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals({ allowlist: /\.css$/ })],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["isomorphic-style-loader", { // 注意，在服务端需要使用此loader isomorphic-style-loader
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

module.exports = merge(config, serverConfig);

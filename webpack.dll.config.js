const path = require('path');

const webpack = require('webpack');

const {DllPlugin} = webpack;

module.exports = {
    name: 'dll',
    mode: 'development',
    target:'web',
    context:path.join(__dirname,'dest'),
    entry: {
        ['root']: [
            'react',
        ],
    },
    output: {
        publicPath: "/static/",
        path: path.resolve(__dirname, 'dest'),
        filename: "[name].dll.js",
        library:'[name]',
        libraryTarget: 'umd2',
        globalObject: "this"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.json$/,
                use: 'json-loader',
                exclude:[/node_modules/]
            },
        ]
    },
    devtool: 'cheap-inline-module-source-map',
    plugins: [
        new DllPlugin({
            context: path.join(__dirname,'dest'),
            name: "[name]",
            path: path.join(__dirname, 'dest', '[name].dll.manifest.json'),
        }),
    ],
};

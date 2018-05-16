const path = require( 'path' );
const webpack = require( 'webpack' );

const {
    DefinePlugin,
    DllReferencePlugin
} = webpack;

module.exports = {
    mode: 'development',
    context: path.join( __dirname, 'src' ),
    entry: {
        index: path.join( __dirname, 'src', 'index.js' )
    },
    output: {
        publicPath: "",
        filename: "[name].js",
        chunkFilename: "[id].js",
        path: path.join( __dirname, 'dest' )
    },
    plugins:[
        new DllReferencePlugin({
            context: path.join(__dirname, 'dest'),
            manifest: require('./dest/root.dll.manifest.json'),
            sourceType: 'umd2',
        }),
        new DefinePlugin( {
            'process.env': {
                NODE_ENV: JSON.stringify( 'development' )
            }
        } ),
    ]
};
module.exports = {
    entry: './index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    watch: true,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'inline-source-map'
};
//# sourceMappingURL=webpack.config.js.map
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        /* another: "./src/another-module.js", */
        /*  shared: "lodash", */
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    /*  optimization: {
                splitChunks: {
                    chunks: "all",
                    minSize: 20000,
                    minRemainingSize: 0,
                    maxSize: 0,
                    minChunks: 1,
                    maxAsyncRequests: 30,
                    maxInitialRequests: 30,
                    automaticNameDelimiter: "~",
                    enforceSizeThreshold: 50000,
                    cacheGroups: {
                        defaultVendors: {
                            test: /[\\/]node_modules[\\/]/,
                            priority: -10,
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true,
                        },
                    },
                },
            }, */
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader",
                },
                {
                    loader: "css-loader",
                },
            ],
        }, ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/navbar.html",
            filename: "./pages/navbar.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/standings.html",
            filename: "./pages/standings.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/teams.html",
            filename: "./pages/teams.html",
        }),
        new CopyPlugin({
            patterns: [{ from: "./src/images", to: "./images" }],
        }),
    ],
};
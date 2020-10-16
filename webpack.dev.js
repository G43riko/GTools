const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');

const PATHS = {
    entryPoint: path.resolve(__dirname, 'src/index.ts'),
    bundles: path.resolve(__dirname, '_bundles'),
}

const config = {
    ...require("./webpack.common"),
    devtool: 'inline-source-map',
    mode: "development",
}

module.exports = config;
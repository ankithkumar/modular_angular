const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "index.js")
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: '[name].vendor.js'
    }
}
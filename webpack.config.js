const path = require("path");

const serverConfig = {
    entry: "./out/index.js",
    target: "node",
    node: {
        fs: 'empty'
    },
    output: {
        filename: "gtools.min.js",
        path: path.resolve(__dirname, "bin")
    }
};
const webConfig = {
    entry: "./out/index.js",
    target: "web",
    node: {
        fs: 'empty'
    },
    output: {
        filename: "gtools.web.min.js",
        path: path.resolve(__dirname, "bin")
    }
};

module.exports = [serverConfig, webConfig];

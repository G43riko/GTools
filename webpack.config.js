const path = require("path");

const serverConfig = {
    entry: [
        "./out/GUtils.node.js",
        "./out/GUtils.common.js",
    ],
    target: "node",
    node: {
        fs: 'empty'
    },
    output: {
        filename: "gtools.min.js",
        path: path.resolve(__dirname, "bin")
    },
    mode: "production"
};
const webConfig = {
    entry: [
        "./out/GUtils.web.js",
        "./out/GUtils.common.js",
    ],
    target: "web",
    node: {
        fs: 'empty'
    },
    output: {
        filename: "gtools.web.min.js",
        path: path.resolve(__dirname, "bin")
    },
    mode: "production"
};

module.exports = [serverConfig, webConfig];

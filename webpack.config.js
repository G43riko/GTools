const path = require("path");

const serverConfig = {
    entry: "./out/index.js",
    target: "node",
    node: {
        fs: 'empty'
    },
    output: {
        filename: "gtools.js",
        path: path.resolve(__dirname, "out")
    }
};
const webConfig = {
    entry: "./out/index.js",
    target: "web",
    node: {
        fs: 'empty'
    },
    output: {
        filename: "gtools.web.js",
        path: path.resolve(__dirname, "out")
    }
};

module.exports = [serverConfig, webConfig];

const path = require("path");

const serverConfig = {
    entry: [
        __dirname + "/out/node.js",
        __dirname + "/out/src/common.js",
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
        __dirname + "/out/web.js",
        __dirname + "/out/src/common.js",
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

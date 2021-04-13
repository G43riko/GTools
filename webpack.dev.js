const config = {
    ...require("./webpack.common"),
    devtool: "inline-source-map",
    mode: "development",
};

module.exports = config;

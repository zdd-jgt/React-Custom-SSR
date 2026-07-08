const path = require("node:path");
const LoadablePlugin = require("@loadable/webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const common = {
    mode: "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    module: {
        rules: [{
            test: /\.(ts|tsx|js|jsx)$/,
            use:"babel-loader",
            exclude: /node_modules/, 
        }]
    },
}

const client = {
    ...common,
    name: "client",
    target: "web",
    entry: {
        client: "./app/client/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "client.js",
        chunkFilename: "[name].chunk.js",
        publicPath: "/",
        clean: true
    },
    plugins: [
        new LoadablePlugin({
            filename: "loadable-stats.json"
        })
    ]
}

const server = {
    ...common,
    name: "server",
    target: "node",
    externalsPresets: {
        node: true
    },
    externals: [
        nodeExternals({
            allowlist: [/@loadable\/component/]
        })
    ],
    entry: {
        server: "./app/server/server.tsx"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "server.js",
        libraryTarget: "commonjs2",
        publicPath: "/",
    },
}

module.exports = [client, server]
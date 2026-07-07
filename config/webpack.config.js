const path = require("node:path");

module.exports = {
    mode: "development",
    entry: "./app/client/index.tsx",
    output: {
        path: path.resolve(__dirname, "../dist/client"),
        filename: "client.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [{
          test: /\.(ts|tsx)$/,
          use: {
           loader: "ts-loader",
           options: {
            transpileOnly: true
           }
          },
          exclude: /node_modules/, 
        }]
    }
}
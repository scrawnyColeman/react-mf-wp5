const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath:
      argv.mode === "development"
        ? "http://localhost:8081/"
        : "https://react-mf-wp5-rk86.vercel.app/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react",
            "@babel/preset-env",
          ],
          plugins: [["@babel/transform-runtime"]],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "react_mfe",
      filename: "remoteEntry.js",
      remotes: {
        "vanilla-mfe":
          "vanilla_mfe@https://vanillajs-mf-wp5-qqyf.vercel.app/remoteEntry.js",
      },
      exposes: {
        "./RenderApp": "./src/exposed/App.tsx",
        "./RenderButton": "./src/exposed/Button.tsx",
        "./App": "./src/App.tsx",
        "./Button": "./src/Button.tsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          eager: false,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          eager: false,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});

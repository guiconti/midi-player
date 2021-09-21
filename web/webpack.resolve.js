import path from "path";

/*
 * This file is separate so `eslint-import-resolver-webpack` doesn't have to load the whole of
 * `webpack.config.js`, including a whole typechecker, just to resolve paths.
 */

const paths = {
  src: path.resolve(__dirname, "src"),
};

module.exports = {
  alias: {
    "react-dom": "@hot-loader/react-dom",
    "~": paths.src,
    "~src": paths.src,
  },
  extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".css", ".scss", ".less"],
};

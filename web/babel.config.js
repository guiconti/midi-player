module.exports = {
  env: {
    development: { plugins: ["react-hot-loader/babel"] },
    production: {
      plugins: [],
    },
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            // Jest runs in node, which doesn't support ES2015 modules.
            // Transform them to CommonJS. Webpack does this for us in the other environments
            modules: "commonjs",
            shippedProposals: true,
          },
        ],
        "@babel/react",
      ],
    },
  },
  presets: [
    [
      "@babel/env",
      {
        modules: false,
        shippedProposals: true,
      },
    ],
    [
      "@babel/preset-typescript",
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
    "@babel/preset-react",
  ],
};

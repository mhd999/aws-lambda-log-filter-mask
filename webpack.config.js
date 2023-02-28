const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  cache: {
    type: 'memory',
  },
  infrastructureLogging: {
    level: "info",
    stream: process.stdout,
  },
  module: {

    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // disable type checker - we typecheck inside a commit hook
              transpileOnly: true,
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
    ],
  },
  mode: 'production',
  plugins: [new webpack.WatchIgnorePlugin({ paths: [/\/iconv-loader$/]})],
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve(process.cwd()),
    filename: 'handler.js',
  },
  optimization: {
    minimize: false,
  },
};

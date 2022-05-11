const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.join(__dirname, './dist'),
    },
  },
  mode: 'development',
  plugins: [
    new ESLintPlugin({
      fix: true,
    }),
  ],
};

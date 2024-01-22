const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let pages = [];
for(let i = 10; i<20; i++) {
  pages.push(new HtmlWebpackPlugin({
    filename: i+'.html',
    template: './src/views/number.njk',
    templateParameters: { number: i }
  }));
}

module.exports = {
    //mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"],
      },
      {
        test: /\.njk$/,
        use: [
            {
                loader: 'simple-nunjucks-loader',
                options: {}
            }
        ]
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/views/index.njk'
  }),
  new HtmlWebpackPlugin({
    filename: 'about.html',
    template: './src/views/about.njk'
  }),
  new MiniCssExtractPlugin(),
  ...pages,
],
};
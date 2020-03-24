module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        loaders: 'url-loader'
      },
    ]
  }
};
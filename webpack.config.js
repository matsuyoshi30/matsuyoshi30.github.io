module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.ts', '.js'
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
      {
          test:/\.ts$/,loader:'ts-loader'
      }
    ]
  }
};
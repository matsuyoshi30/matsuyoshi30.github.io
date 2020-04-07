module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.jsx'
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
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
    },
    ]
  },
};
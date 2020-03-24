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
  }
};
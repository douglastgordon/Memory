const path = require('path')

module.exports = {
  context: __dirname,
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.json$/, loader: "json-loader"}
    ],
  },

  devtool: 'source-maps',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}

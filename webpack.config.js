const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve('app/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  }
};

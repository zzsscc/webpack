const { srcRoot, rootNode } = require('../configs/helpers/path');

module.exports = {
  entry: `${srcRoot('index.js')}`,
  output: {
    filename: 'bundle.js',
    path: rootNode('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=2',
          'sass-loader?outputStyle=expanded'
        ]
      }
    ]
  }
};
const {srcRoot, rootNode} = require('../configs/helpers/path');

module.exports = {
  entry: `${srcRoot('index.js')}`,
  output: {
    filename: 'bundle.js',
    path: rootNode('dist')
  }
};
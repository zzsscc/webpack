const { srcRoot, rootNode } = require('../configs/helpers/path');

module.exports = {
  entry: `${srcRoot('index.js')}`,   // 入口文件
  output: {
    filename: 'bundle.js',           // 输出文件
    path: rootNode('dist'),          // 输出文件的路径
    // 给url-loader用的资源文件前缀路径,表示资源的发布地址，当配置过该属性后，打包文件中所有通过相对路径引用的资源都会被配置的路径所替换。
    // 具体表现为：被设置为url-loader的outputPath前的路径  -->  ..path/dist/img
    publicPath: 'dist/'
  },
  module: {
    rules: [
      // 加载样式文件 style-loader  css-loader  sass-loader
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
      },
      // 加载图片 file-loader url-loader
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'img/',    // 在output中的publicPath路径中的路径
              limit: 8192     // 小于8129字节的被转为baes64引入，大于8129字节的正常打包在指定的路径下
            }
          }
        ]
      }
    ]
  }
};
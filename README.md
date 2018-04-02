开发

如果是首次运行，请先执行以下命令安装依赖：

 $ yarn install

命令说明

 $ npm run dev # 本地开发

 $ npm run prod # 打包线上版本

npm启动配置
 -->
 package.json
 "scripts": {
    "dev": "webpack --env.NODE_ENV=development --mode development",
    "prod": "webpack --env.NODE_ENV=production --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

init
 --> webpack && webpack-cli

加载样式文件
 --> style-loader && css-loader && sass-loader && node-sass

加载图片
 --> file-loader url-loader

加载字体文件
-->  file-loader url-loader

加载资源文件
-->  加载资源文件，csv/tsv/xml (json默认支持)

分文件打包
--> 
entry: {
  app: `${srcRoot('index.js')}`,
  print: `${srcRoot('print.js')}`,
},
output: {
  filename: '[name].bundle.js',
  path: rootNode('dist'),
  publicPath: 'dist/'
},

打包构建前先清理输出文件夹
-->  clean-webpack-plugin
-->
plugins: [
  new CleanWebpackPlugin(['dist'], { root: rootNode('') }),
],
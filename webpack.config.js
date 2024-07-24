const path = require('path');
// 引入html插件
const HTMLPlugin=require("html-webpack-plugin")
module.exports = {    
    // 入口
    entry: path.resolve(__dirname, 'src/index.js',''),    
    // 出口
    output: {        
        path: path.resolve(__dirname, 'dist'),        
        filename: 'bundle2.js',        
        publicPath: './'    
    
},

// webpack默认情况下，只会处理js文件,如果我们希望引入其他文件，则为其引入loaders
// 以css为例:
    //    -使用css-loader可以处理js中的样式
    // 安装npm add css-loader -D
    // 配置
    module:{
        rules:[
            {
                test:/\.css$/i,         //匹配与css结尾的
                use:["style-loader","css-loader"]
            },
            {
                test:/\.jpg$/i,
                type:"asset/resource" //图片直接资源类型的数据，可以通过指定type来处理
            }
            
        ]
    },
    // npm add -D html-webpack-plugin 插件
    // npx webpack --watch监听模式，自动更新
 plugins:[
    new HTMLPlugin({
        title:"Hello Webpack"
    })
 ]
}




/**
 * Created by MangoGan on 2017/12/24.
 */
module.exports={
    devtool:'eval-source-map',//打包调试用
    entry:__dirname + '/app/main.js',//唯一入口文件
    output:{
        path:__dirname+'/public',//打包后文件存放地方
        filename:'bundle.js'//打包后输出文件名
    },
    devServer : {
        contentBase : './public',//本地服务器加载的页面所在的目录
        historyApiFallback : true,//不跳转
        inline : true//实时刷新
    },
    module : {
        rules:[
        {
            test:/(\.jsx|\.js)$/,
            use: {
                loader:"babel-loader",
            },
            exclude:/node_modules/
        },
        {
            test:/\.css$/,
            use:[
                {
                    loader:"style-loader"
                },{
                    loader:"css-loader",
                    options:{
                         modules: true, // 指定启用css modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                    }
                },{
                    loader:"postcss-loader"
                }
            ]
        }
        ]
    }
}
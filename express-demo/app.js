var express = require('express')

//创建服务器
var app = express()
//指定公开目录
app.use( '/public/' , express.static(' ./public/ '))

//处理 ‘/’请求
app.get('/',function(req,res){
    res.send('hello express')
})
app.listen(8080,function(){
    console.log('app is running at port 8080')
})
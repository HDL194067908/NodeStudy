// 引入模块
var express  =  require('express')
var fs = require('fs')

//创建服务器
var app = express()

//配置模板引擎
app.engine('html', require('express-art-template'));


//指定公开目录
app.use( '/public/' , express.static(' ./public/ '))
app.use( '/node_modules/' , express.static(' ./node_modules/ '))

//路由
app.get('/',function(req,res){
    fs.readFile('./resources/db.json','utf8',function(err,data){
        if(err){
            return res.statusCode(500).send(' Server Error.')
        }
        var str = JSON.parse(data).str
        res.render('index.html',{
            data : str
        })
    })
    
})
//开启服务器
app.listen(8080,function(){
    console.log('app is running at port 8080')
})
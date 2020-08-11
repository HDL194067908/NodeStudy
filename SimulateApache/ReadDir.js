var  http =  require('http')
var fs = require('fs')
var template = require('art-template')
var wwwDir =  '/home/node-workceplan/SimulateApache/www'
http.createServer().on('request',function(req,res){
    fs.readdir(wwwDir,function(err,files){
       
        if (err){
            res.setHeader('Content-Type','text/plain; charset=utf-8') 
            return res.end('读取文件路径异常: '+err)
        }
        fs.readFile(wwwDir+'/view/dir.html',function(err,data){
            if(err){
                return res.end('404 Not Found.')
            }
           var htmlStr =  template.render(data.toString(),{
               title:wwwDir+req.url,
               files:files
           })
           res.end(htmlStr)
        })
    })
})
.listen(8080,function(){
           console.log('服务器启动成功，可以通过http://127.0.0.1:8080/进行访问')
})
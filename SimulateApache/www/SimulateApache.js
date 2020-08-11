var  http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

server.on('request',function( req , res ){
    var wwwDir =  '/home/node-workceplan/SimulateApache/www'
    var url = req.url
    var filePath =   '/resources/index.html'
    if (url != '/'){
        filePath = url
    }
   
    fs.readFile(wwwDir + filePath , function(err,data){
        if (err){
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
})

server.listen(8080  , function(){
    console.log('服务器启动成功，可以通过http://127.0.0.1:8080/进行访问')
})
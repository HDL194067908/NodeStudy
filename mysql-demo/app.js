var mysql = require('mysql')

/**
 * 1、创建连接
 * 2、连接数据库
 * 3、操纵数据库
 * 4、关闭数据库 
 */
var connection = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '970612',
    database : 'travelDB'
})

connection.connect()

connection.query("select * from   user" , function(err,res,fields){
    if(err) throw err 
    console.log(res)
})

connection.end()
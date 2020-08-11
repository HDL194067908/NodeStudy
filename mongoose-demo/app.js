var mongoose = require('mongoose');
var Schema = mongoose.Schema

// 1 、连接
mongoose.connect('mongodb://localhost:27017/hdl', {useNewUrlParser: true, useUnifiedTopology: true});


//2 、设计集合结构（表结构），
var userSchema = new Schema({
    username  : {
        type :String,
        required : true   //不为空
    },
    password : {
        type : String,
        required : true
    },
    email : String
})

// 3、 将文档结构发布为模型
/**
 * 第一个参数：传入1一个大写名词单数字符串来表示数据库名称
 *                           mongoose 会自动    将大写名词  的字符生成 小写复数 的集合名称
 *                             例如：User - > users
 * 第二个参数 ： 架构 SChema
 * 返回值 ： 模型构造函数
 *  */
var User = mongoose.model("User",userSchema)

// 4 、得到模块构造函数，操作增删改查

// //4.1、增加数据
// var admin = new User({
//     username  : 'admin',
//     password  : '123456',
//     email : '123456@qq.com'
// })

// //4.1.2 持久化
// admin.save(function(err,ret){
//     if( err){
//         console.log(err)
//     }else {
//         console.log("保存成功")
//         console.log(ret)
//     }
// })

//4.2 查询数据  -查询所有
// User.find(function(err,ret){
//     if( err){
//         console.log("查询失败")
//     }else {
//         console.log(ret)
//     }
// })
 
// 4.2条件查询
// User.find({ 
//     username : "admin",
//     password :"123456"
// },function(err,ret){
//     if( err){
//         console.log("查询失败")
//     }else {
//         console.log(ret)
//     }
// })

//4.3 删除数据
// User.remove({
//     username :'admin'
// },function(err){
//     if (err){
//         console.log('delete fail')
//     }else {
//         console.log('delete success')
//     }
// })

//4.4 更新数据
User.findByIdAndUpdate('5f30fd65bd10c1557c1554b6',{
    password :'123'
    },function(err){
        if(err){
            return console.log('更新失败')
        }
        console.log('更新成功')
})
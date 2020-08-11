var  url = require('url')

var parseObj = url.parse('/test?name=黄&age=99',true)
console.log(parseObj)
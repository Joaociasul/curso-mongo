const mongose = require('mongoose')
const url  = 'mongodb://localhost:27017/todo'
mongose.connect(url,{useNewUrlParser:true})
module.exports = mongose
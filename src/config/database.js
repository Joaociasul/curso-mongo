const mongose = require('mongoose')
const url  = 'mongodb://mongo/todo'
mongose.connect(url,{useNewUrlParser:true})
.then(db => console.log('db conectado',db.connection.host))
.catch(err => console.log(err))
module.exports = mongose
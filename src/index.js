const express = require('express')
const server = express()
const port = 5000
server.use(express.json())

const TaskRoutes = require('./routes/taskRoutes')
server.use('/task',TaskRoutes)


server.listen(port,()=>{console.log("api online" + port)})
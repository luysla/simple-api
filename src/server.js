const express = require('express')
const bodyParser = require('body-parser')

const database = require('./database')
const controller =  require('./../services/controller') 

const app = express()
const port = process.env.PORT || 3000

database.createConnection()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/api', (req, resp) => controller.listTasks(req, resp))

app.post('/api/add-task', (req, resp) => controller.addTask(req,resp))

app.post('/api/update-task/:id', (req, resp) => controller.updateTask(req, resp))


app.listen(port, function(){
    console.log('Server is runnning on port:',port);
})
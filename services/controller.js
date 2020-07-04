const mongoose = require('mongoose')
const schema = require('./../src/model')

const model = mongoose.model('task', schema.taskSchema)

//Create task
function addTask(req, resp){
    const task = req.body

    if(task.name){
        model.create(task)
        resp.status(201).json(task)
    }else{
        resp.status(400).json({'message': 'Name is required!'})
    }
}

//List tasks
function listTasks(req, resp){
    model.find({}).then(tasks => resp.json(tasks)).catch(error => resp.json(error))
}

//Edit task
function updateTask(req, resp){
    const id = req.params.id
    const idObject = mongoose.Types.ObjectId(id);
    const task = req.body

    model.findByIdAndUpdate(idObject)
    .then(resp.status(200).json({task,'message':'Task updated'}))
    .catch(resp.status(400).json({ 'message':'Task with this id not found'}))
}

module.exports = { addTask , listTasks, updateTask }
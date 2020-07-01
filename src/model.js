const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: { type: String , required: true},
    description: { type: String },
    priority: { type: Number },
    cratedAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
})

module.exports = { taskSchema } 



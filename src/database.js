const mongoose = require('mongoose')

const dbURL = 'mongodb://127.0.0.1/simpleapi'
const dbConnection = mongoose.connection;

function createConnection(){
    mongoose.connect(dbURL, { useUnifiedTopology: true , useNewUrlParser: true, useCreateIndex: true })

    dbConnection.once('open',() => {
        console.log('Connection of database is on...')
    })

    dbConnection.on('error', (error) => {
        console.log('Error: ',error)
    })
}

module.exports = { createConnection }
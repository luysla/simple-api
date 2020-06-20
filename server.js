const express = require('express')

const app = express()
const port = process.env.PORT || 3000

const baseURL = 'http://localhost:3000'

app.use(express.json())

app.get('/api', (req, resp) =>{
    console.log(resp.json({'message':'ok'}));
})

app.listen(port, function(){
    console.log('Server is runnning on port:',port);
})
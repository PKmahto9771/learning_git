const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://krishnanew171890:VM7F5U682wYOTX3L@cluster0.e3x3etf.mongodb.net/test')

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    })
    .then(result => res.json(result))
    .catch(arr => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})
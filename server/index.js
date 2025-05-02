const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Empolyee')

const app = express()
app.use(express.json()) 
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee");


const port = 3001;

app.post('/signup',(req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(port,()=>{
    console.log("server is running")
})

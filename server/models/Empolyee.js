const mongoose = require('mongoose')
const { MdEmail } = require('react-icons/md')

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
      },
    email:{
        type: String,
        required: true
      },
    password:{
        type: String,
        required: true
      },
    confromPassword:{
        type: String,
      },
}) 

const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmployeeModel


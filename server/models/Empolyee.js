const mongoose = require('mongoose')
const { MdEmail } = require('react-icons/md')

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    confromPassword:String,
}) 

const EmployeeModel = mongoose.model("employees",EmployeeSchema)
module.exports = EmployeeModel


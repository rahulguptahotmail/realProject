const mongoose = require('mongoose')

const uri = "mongodb+srv://rahulguptahotmail:To-Do-Task@to-do-task.p4hrqni.mongodb.net/to-do-task";
mongoose.connect(uri).then((res)=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose;

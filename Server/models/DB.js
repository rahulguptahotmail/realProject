const mongoose = require('mongoose')

const uri = process.env.Mongo_URL || "mongodb://localhost:27017/realProject";
mongoose.connect(uri).then((res)=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose;
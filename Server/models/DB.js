const mongoose = require('mongoose')

const uri = "mongodb+srv://rahulguptahotmail:UP56ac6331@cluster0.cgrfan7.mongodb.net/realProject";
mongoose.connect(uri).then((res)=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose;

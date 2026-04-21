const mongoose = require('mongoose')

const uri = "mongodb+srv://rahulguptahotmail_db_user:UP56ac6331@cluster0.o3chn5f.mongodb.net/realproject";
mongoose.connect(uri).then((res)=>{
    console.log("connected")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose;

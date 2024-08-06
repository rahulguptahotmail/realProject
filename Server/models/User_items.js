const DB = require("./DB")

const itemsSchema =  new DB.Schema({
    title: String,
    topic: String,
    description: String,
    createdBy: String
})

const itemsModel = DB.model("items",itemsSchema);

module.exports = itemsModel;

const DB = require("./DB");

const user_schema = DB.Schema({
  userId: { type: Number, unique: true },
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, required: false},
  phone: { type: String, unique: true, required: false },
  email: { type: String, unique: true, required: false },
  password: {type:String},
  createAt: { type: Date, default: Date.now() },
  isAdmin: { type: Boolean, default: false },
  related : {type: Array}
});

const userModel = DB.model("User", user_schema);

module.exports = userModel;

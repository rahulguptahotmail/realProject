const userModel = require("../models/User_model");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {

  const emailBody = req.query.email;
  const passwordBody = req.query.password;

  try {
    const data = await userModel.find({ email: emailBody });
    if (data.length === 1) {
     
      if (data[0].password === passwordBody) {
        const token = jwt.sign({email:data[0].email, password:data[0].password},"realProject")
        res.status(200).json({ token: token,UserName:data[0].firstName + " " + data[0].lastName});
      } else {
        res.status(400).send("Password incorrect");
      }
    } else {
      res.status(400).send("Email Not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = Login;

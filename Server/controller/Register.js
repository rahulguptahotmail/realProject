
const userModel = require("../models/User_model");

const Register = async (req, res) => {
  try {
      await userModel.find({ phone: req.body.phone }).then(checkPhone =>{
      if (checkPhone.length > 1) 
        res.status(500).send("phone");
    })
    await userModel.find({ email: req.body.email }).then(checkEmail=>{
      if (checkEmail.length > 1) 
        res.status(500).send("email");
    })
   
    
    const idx = await userModel.countDocuments();
    await userModel
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: idx+"userName",
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
        userId: idx + 1,
      })
      .then((resp) => res.status(200).send(resp))
      .catch((err) => res.status(400).send(err));
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = Register;

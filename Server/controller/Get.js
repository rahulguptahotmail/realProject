const userModel = require("../models/User_model");

const Get = async (req, res) => {
  try {
    const idx = await userModel.countDocuments();
    console.log(idx)
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
};

module.exports = Get;

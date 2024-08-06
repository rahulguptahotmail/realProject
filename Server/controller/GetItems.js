const itemsModel = require("../models/User_items");

const GetItems = async (req, res) => {
  try {
    await itemsModel
      .find()
      .then((data) => {
        res.status(200).send(JSON.stringify(data));
      })
      .catch((err) => res.status(400).send(err));
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = GetItems;

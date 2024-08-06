const { response } = require("express");
const itemsModel = require("../models/User_items");

const ItemDelete = async (req, res) => {
  try {
    const data = await itemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = ItemDelete;

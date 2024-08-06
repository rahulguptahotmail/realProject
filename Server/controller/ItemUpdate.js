const User_items = require("../models/User_items");

const ItemUpdate = async (req, res) => {
  const data = await User_items.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    topic: req.body.topic,
    description: req.body.description,
  });
  res.status(200).send(data);
};

module.exports = ItemUpdate;

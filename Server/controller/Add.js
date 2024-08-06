const itemsModel = require("../models/User_items");

const Add = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      topic: req.body.topic,
      description: req.body.description,
      createdBy: req.body.UserName
    };
    await itemsModel
      .create(data)
      .then((resp) => res.status(200).send(resp))
      .catch((err) => {
        res.status(400).send(err);
      });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = Add;

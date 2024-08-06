const itemsModel = require("../models/User_items");

const GetItem = async (req, res) => {
    try{
  const data = await itemsModel.findById(req.params.id)
  res.status(200).json(data);
    }catch(err)
    {
        res.status(500).send(err)
    }
};

module.exports = GetItem;

const Goods = require("../models/goodsModel");

const getGoods = async (req, res) => {
  try {
    let goodsArray = await Goods.find();
    if (!goodsArray) {
      res.status(404).json({ error: "There is no array" });
      return;
    }
    res.json(goodsArray);
  } catch (err) {
    res.json({ error: err.message });
  }
};

const createGoods = async (req, res) => {
  console.log(req.body);
  try {
    let goodsItem = await Goods.create({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      storeName: req.body.storeName,
    });

    if (!goodsItem) {
      res.status(500).json({ error: "Goods was not created" });
      return;
    }

    let createdGoods = await goodsItem.save();
    res.status(200).json(createdGoods );
  } catch (err) {
    res.json({ error: err.message });
  }
};

const deleteGoods = async (req, res) => {
  try {
    let goodsItem = await Goods.findByIdAndDelete(req.params.id);
    console.log(goodsItem);

    if (!goodsItem) {
      res
        .status(500)
        .json({ error: "There is no elemnt with this id " + req.params.id });
      return;
    }

    res.status(200).json( goodsItem );
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateGoods = async (req, res) => {
    console.log(req.body)
  try {
    let goodsItem = await Goods.findById(req.params.id);

    goodsItem.productName = req.body.productName || goodsItem.productName;
    goodsItem.productDescription =
    req.body.productDescription || goodsItem.productDescription;
    goodsItem.productPrice = req.body.productPrice || goodsItem.productPrice;
    goodsItem.storeName = req.body.storeName || goodsItem.storeName;

    console.log(goodsItem);

    if (!goodsItem) {
      res
        .status(500)
        .json({ error: "There is no elemnt with this id " + req.params.id });
      return;
    }

    let updatedGoods = await goodsItem.save();
    res.status(200).json(updatedGoods);
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = { createGoods, getGoods, deleteGoods, updateGoods };

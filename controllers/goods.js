const service = require("../service/goods");

const getNewGoods = async (req, res) => {
  const newGoods = await service.findNewGoods();
  if (newGoods.length !== 0) {
    return res
      .status(200)
      .json(newGoods[Math.floor(Math.random() * newGoods.length)]);
  }
  res.status(404).json({ message: "Not found" });
};

const getGoodsById = async (req, res) => {
  const { goodsId } = req.params;
  const goods = await service.findGoodsById(goodsId);
  if (goods) {
    return res.status(200).json(goods);
  }
  res.status(404).json({ message: "Not found" });
};


module.exports = {
  getNewGoods,
  getGoodsById,
};

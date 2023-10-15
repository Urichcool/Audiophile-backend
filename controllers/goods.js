const service = require("../service/goods");

const getNewGoods = async (req, res) => {
  const newGoods = await service.findNewGoods();
  if (newGoods) {
    res.status(200).json(newGoods[Math.floor(Math.random() * newGoods.length)]);
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = {
  getNewGoods,
};

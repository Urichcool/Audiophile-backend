const Goods = require("./schemas/goods");

const findNewGoods = async () => Goods.find({ new: true });
const findGoodsById = async (goodsId) => Goods.findOne({id: goodsId})

module.exports = {
  findNewGoods,
  findGoodsById
};

const Goods = require("./schemas/goods");

const findNewGoods = async () => Goods.find({new:true});

module.exports = {
  findNewGoods,
};

import { Goods } from "./schemas/goods";

const findNewGoods = async () => Goods.find({ new: true });
const findGoodsById = async (goodsId:string) => Goods.findById(goodsId)

module.exports = {
  findNewGoods,
  findGoodsById
};

import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";

const findNewGoods = async ():Promise<IGoods[]> => Goods.find({ new: true });
const findGoodsById = async (goodsId: string): Promise<IGoods | null> =>
  Goods.findById(goodsId);

module.exports = {
  findNewGoods,
  findGoodsById
};

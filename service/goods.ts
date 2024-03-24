import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";

const findNewGoods = async (): Promise<IGoods[]> => Goods.find({ new: true });
const findCartStock = async (cartIds: [string]): Promise<IGoods[]> =>
  Goods.find({
    _id: {
      $in: cartIds,
    },
  });;
const findGoodsById = async (goodsId: string): Promise<IGoods | null> =>
  Goods.findById(goodsId);

module.exports = {
  findNewGoods,
  findGoodsById,
  findCartStock
};

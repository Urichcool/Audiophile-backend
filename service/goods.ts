import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";

const findNewGoods = async (): Promise<IGoods[]> => Goods.find({ new: true });
const findCartStock = async (cartIds: [string]): Promise<IGoods[]> =>
  Goods.find({
    _id: {
      $in: cartIds,
    },
  });
const findGoodsById = async (goodsId: string): Promise<IGoods | null> =>
  Goods.findById(goodsId);
const findProductAndUpdateStock = async ({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) =>
  Goods.findByIdAndUpdate({ _id: id }, { $inc: { stock: -quantity } })
    .then(() => {
      return {isUpdated: true}
    })
    .catch(() => {
      return { isUpdated: false };
    }); ;

module.exports = {
  findNewGoods,
  findGoodsById,
  findCartStock,
  findProductAndUpdateStock,
};

import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";
import * as mongodb from "mongodb";

const findNewGoods = async (): Promise<IGoods[]> => Goods.find({ new: true });
const findCartStock = async (cartIds: [string]): Promise<IGoods[]> =>
  Goods.find({
    _id: {
      $in: cartIds,
    },
  });
const findGoodsById = async (goodsId: string): Promise<IGoods | null> =>
  Goods.findById(goodsId);

const findProductAndUpdateStock = async (
  products: {
    id: string;
    quantity: number;
  }[]
): Promise<{ wasUpdated: boolean }> => {
  const bulkOps: mongodb.AnyBulkWriteOperation<IGoods>[] = products.map(
    (product) => ({
      updateOne: {
        filter: { _id: product.id },
        update: { $inc: { stock: -product.quantity } },
      },
    })
  );

  return await Goods.bulkWrite(bulkOps)
    .then(() => {
      return {
        wasUpdated: true,
      };
    })
    .catch(() => {
      return {
        wasUpdated: false,
      };
    });
};

module.exports = {
  findNewGoods,
  findGoodsById,
  findCartStock,
  findProductAndUpdateStock,
};

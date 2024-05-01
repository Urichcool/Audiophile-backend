import { Request, Response } from "express";
import { IGoods } from "../interfaces/goods";
const service = require("../service/goods");

const checkStockById = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const { goodsId } = req.params;
  if (goodsId.length === 24) {
    const goods: IGoods = await service.findGoodsById(goodsId);
    return res.status(200).json({ name: goods.name, stock: goods.stock });
  }
  res.status(404).json({ message: "Not found" });
};

const checkCartStock = async (
  req: Request<{}, {}, { id: string; quantity: number }[]>,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  if (Object.keys(req.body).length !== 0) {
    const Ids: string[] = req.body.map(({ id }) => id);
    const cart: IGoods[] = await service.findCartStock(Ids);
    if (
      cart.every(({ _id, stock }) => {
        const product: { id: string; quantity: number } | undefined =
          req.body.find(({ id }) => id === String(_id));
        if (product) {
          return product.quantity <= stock;
        }
      })
    ) {
      return res.status(200).json({ isEnoughCartStock: true });
    }
    return res.status(200).json({ isEnoughCartStock: false });
  }
  res.status(404).json({ message: "Not found" });
};

const getTheProductsOutOfStock = async (
  req: Request<{}, {}, { id: string; quantity: number }[]>,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  if (Object.keys(req.body).length !== 0) {
  await service.findProductAndUpdateStock(req.body);
  }
return res.status(200).json({ isEnoughCartStock: true });
};

module.exports = {
  checkStockById,
  checkCartStock,
  getTheProductsOutOfStock,
};

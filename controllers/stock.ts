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
  const Ids: string[] = req.body.map(({ id }) => id);
  const cart: IGoods[] = await service.findCartStock(Ids);
  if (
    req.body.every(({ id, quantity }) => {
      cart.find(({ _id }) => {
        id === String(_id);
      })!.stock <= quantity;
    })
  ) {
    return res.status(200).json({ isEnoughCartStock: true });
  }
  if (
    req.body.some(({ id, quantity }) => {
      cart.find(({ _id }) => {
        id === String(_id);
      })!.stock < quantity;
    })
  ) {
    return res.status(200).json({ isEnoughCartStock: false });
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = {
  checkStockById,
  checkCartStock,
};

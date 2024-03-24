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
  const cart: IGoods[] = await service.findCartStock(req.body.map((id) => id));
  if (
    cart.every(({ id, stock }) => {
      const cartProduct = req.body.find((product) => product.id === id);
      if (cartProduct) {
        cartProduct.quantity <= stock;
      }
    })
  ) {
    return res.status(200).json({ isEnoughStock: true });
  }
  if (
    cart.every(({ id, stock }) => {
      const cartProduct = req.body.find((product) => product.id === id);
      if (cartProduct) {
        cartProduct.quantity > stock;
      }
    })
  ) {
    return res.status(200).json({ isEnoughStock: false });
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = {
  checkStockById,
  checkCartStock,
};

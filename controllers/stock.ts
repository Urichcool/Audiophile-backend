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

module.exports = {
  checkStockById,
};

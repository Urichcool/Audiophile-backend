import { Request, Response } from "express";
import { IGoods } from "../interfaces/goods";
const service = require("../service/goods");

const checkStockById = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const { goodsId, quantity } = req.params;
  if (goodsId.length === 24) {
    const goods: IGoods = await service.findGoodsById(goodsId);
    if (goods && goods.stock >= Number(quantity)) {
      return res.status(200).json({ message: "Enough products in stock" });
    }
  }
  res.status(404).json({ message: "There are not enough products in stock" });
};

module.exports = {
  checkStockById,
};

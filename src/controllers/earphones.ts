import { Request, Response } from "express";
import { IGoods } from "../interfaces/goods";
const service = require("../service/earphones");

const getAllEarphones = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const earphones:IGoods[] = await service.findAllEarphones();
  if (earphones.length !== 0) {
    return res.status(200).json(earphones);
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = {
  getAllEarphones,
};

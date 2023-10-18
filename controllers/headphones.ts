import { Request, Response } from "express";
import { IGoods } from "../interfaces/goods";
const service = require("../service/headphones");

const getAllHeadphones = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const headphones: IGoods[] = await service.findAllHeadphones();
  if (headphones.length !== 0) {
    return res.status(200).json(headphones);
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = { getAllHeadphones };

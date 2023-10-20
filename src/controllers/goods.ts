import { Request, Response } from "express";
import { IGoods } from "../interfaces/goods";
const service = require("../service/goods");
const earphonesService = require("../service/earphones");
const headphonesService = require("../service/headphones");
const speakersService = require("../service/speakers");

const getNewGoods = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const newGoods: IGoods[] = await service.findNewGoods();
  if (newGoods.length !== 0) {
    return res
      .status(200)
      .json(newGoods[Math.floor(Math.random() * newGoods.length)]);
  }
  res.status(404).json({ message: "Not found" });
};

const getGoodsById = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const { goodsId } = req.params;
  if (goodsId.length === 24) {
    const goods: IGoods = await service.findGoodsById(goodsId);
    if (goods) {
      return res.status(200).json(goods);
    }
  }
  res.status(404).json({ message: "Not found" });
};

const getOtherGoods = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const headphones:IGoods[] = await headphonesService.findAllHeadphones();
  const speakers: IGoods[] = await speakersService.findAllSpeakers();
  const earphones: IGoods[] = await earphonesService.findAllEarphones();

  const otherGoods: IGoods[] = [
    headphones[Math.floor(Math.random() * headphones.length)],
    earphones[Math.floor(Math.random() * earphones.length)],
    speakers[Math.floor(Math.random() * speakers.length)],
  ];

  if (otherGoods.length !== 0) {
    return res.status(200).json(otherGoods);
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = {
  getNewGoods,
  getGoodsById,
  getOtherGoods,
};

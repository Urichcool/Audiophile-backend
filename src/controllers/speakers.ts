import { Request, Response } from "express";
import { IGoods } from "../interfaces/goods";
const service = require("../service/speakers");

const getAllSpeakers = async (
  req: Request,
  res: Response
): Promise<void | Response<any, Record<string, any>>> => {
  const speakers:IGoods[] = await service.findAllSpeakers();
  if (speakers.length !== 0) {
    return res.status(200).json(speakers);
  }
  res.status(404).json({ message: "Not found" });
};

module.exports = { getAllSpeakers };

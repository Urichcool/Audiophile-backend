import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";

const findAllHeadphones = async ():Promise<IGoods[]> => Goods.find({ category: "headphones" });

module.exports = { findAllHeadphones };

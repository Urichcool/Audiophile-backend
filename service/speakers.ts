import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";

const findAllSpeakers = async ():Promise<IGoods[]> => Goods.find({ category: "speakers" });

module.exports = { findAllSpeakers };

import { IGoods } from "../interfaces/goods";
import { Goods } from "./schemas/goods";

const findAllEarphones = async ():Promise<IGoods[]> => Goods.find({ category: "earphones" });

module.exports = { findAllEarphones };

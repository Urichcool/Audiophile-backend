import { Goods } from "./schemas/goods";

const findAllEarphones = async () => Goods.find({ category: "earphones" });

module.exports = { findAllEarphones };

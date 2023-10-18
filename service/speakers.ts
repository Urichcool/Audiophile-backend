import { Goods } from "./schemas/goods";

const findAllSpeakers = async () => Goods.find({ category: "speakers" });

module.exports = { findAllSpeakers };

const Goods = require("./schemas/goods");

const findAllSpeakers = async () => Goods.find({ category: "speakers" });

module.exports = { findAllSpeakers };

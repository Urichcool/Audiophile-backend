const Goods = require("./schemas/goods");

const findAllHeadphones = async () => Goods.find({category:"headphones"});

module.exports = { findAllHeadphones };

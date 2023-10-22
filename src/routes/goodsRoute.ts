import express from "express";
const goodsController = require("../controllers/goods");
const goodsRoute = express.Router();

goodsRoute.get("/new", goodsController.getNewGoods);
goodsRoute.get("/other", goodsController.getOtherGoods);
goodsRoute.get("/:goodsId", goodsController.getGoodsById);

module.exports = { goodsRoute };

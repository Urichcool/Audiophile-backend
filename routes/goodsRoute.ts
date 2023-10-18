import express from "express";
const goodsRoute = express.Router();
const goodsController = require("../controllers/goods");

goodsRoute.get("/new", goodsController.getNewGoods);
goodsRoute.get("/other", goodsController.getOtherGoods);
goodsRoute.get("/:goodsId", goodsController.getGoodsById);

module.exports = { goodsRoute };

import express from "express";
const stockController = require("../controllers/stock");
const stockRoute = express.Router();

stockRoute.get("/check/:goodsId", stockController.checkStockById);
stockRoute.post("/check/cart", stockController.checkCartStock);
stockRoute.patch("/update/stock", stockController.getTheProductsOutOfStock);

module.exports = { stockRoute };

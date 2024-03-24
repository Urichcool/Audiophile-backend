import express, { Request } from "express";
const stockController = require("../controllers/stock");
const stockRoute = express.Router();

stockRoute.get("/check/:goodsId", stockController.checkStockById);
stockRoute.get("/check/cart", stockController.checkCartStock)

module.exports = { stockRoute };

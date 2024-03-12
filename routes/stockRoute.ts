import express from "express";
const stockController = require("../controllers/stock");
const stockRoute = express.Router();

stockRoute.get("/check/:goodsId", stockController.checkStockById);

module.exports = { stockRoute };

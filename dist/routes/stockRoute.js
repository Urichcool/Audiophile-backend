"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stockController = require("../controllers/stock");
const stockRoute = express_1.default.Router();
stockRoute.get("/check/:goodsId", stockController.checkStockById);
stockRoute.get("/check/cart", stockController.checkCartStock);
module.exports = { stockRoute };

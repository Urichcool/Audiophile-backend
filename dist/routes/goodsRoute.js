"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goodsRoute = express_1.default.Router();
const goodsController = require("../controllers/goods");
goodsRoute.get("/new", goodsController.getNewGoods);
goodsRoute.get("/other", goodsController.getOtherGoods);
goodsRoute.get("/:goodsId", goodsController.getGoodsById);
module.exports = { goodsRoute };

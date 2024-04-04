"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const service = require("../service/goods");
const checkStockById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { goodsId } = req.params;
    if (goodsId.length === 24) {
        const goods = yield service.findGoodsById(goodsId);
        return res.status(200).json({ name: goods.name, stock: goods.stock });
    }
    res.status(404).json({ message: "Not found" });
});
const checkCartStock = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cart = yield service.findCartStock(req.body.map((id) => id));
    if (cart.every(({ id, stock }) => {
        const cartProduct = req.body.find((product) => product.id === id);
        if (cartProduct) {
            cartProduct.quantity <= stock;
        }
    })) {
        return res.status(200).json({ isEnoughStock: true });
    }
    if (cart.every(({ id, stock }) => {
        const cartProduct = req.body.find((product) => product.id === id);
        if (cartProduct) {
            cartProduct.quantity > stock;
        }
    })) {
        return res.status(200).json({ isEnoughStock: false });
    }
    res.status(404).json({ message: "Not found" });
});
module.exports = {
    checkStockById,
    checkCartStock,
};

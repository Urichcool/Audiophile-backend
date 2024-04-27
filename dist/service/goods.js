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
const goods_1 = require("./schemas/goods");
const findNewGoods = () => __awaiter(void 0, void 0, void 0, function* () { return goods_1.Goods.find({ new: true }); });
const findCartStock = (cartIds) => __awaiter(void 0, void 0, void 0, function* () {
    return goods_1.Goods.find({
        _id: {
            $in: cartIds,
        },
    });
});
const findGoodsById = (goodsId) => __awaiter(void 0, void 0, void 0, function* () { return goods_1.Goods.findById(goodsId); });
const findProductAndUpdateStock = ({ id, quantity, }) => __awaiter(void 0, void 0, void 0, function* () {
    return goods_1.Goods.findByIdAndUpdate({ _id: id }, { $inc: { stock: -quantity } })
        .then(() => {
        return { isUpdated: true };
    })
        .catch(() => {
        return { isUpdated: false };
    });
});
;
module.exports = {
    findNewGoods,
    findGoodsById,
    findCartStock,
    findProductAndUpdateStock,
};

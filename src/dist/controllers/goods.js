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
const earphonesService = require("../service/earphones");
const headphonesService = require("../service/headphones");
const speakersService = require("../service/speakers");
const getNewGoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newGoods = yield service.findNewGoods();
    if (newGoods.length !== 0) {
        return res
            .status(200)
            .json(newGoods[Math.floor(Math.random() * newGoods.length)]);
    }
    res.status(404).json({ message: "Not found" });
});
const getGoodsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { goodsId } = req.params;
    if (goodsId.length === 24) {
        const goods = yield service.findGoodsById(goodsId);
        if (goods) {
            return res.status(200).json(goods);
        }
    }
    res.status(404).json({ message: "Not found" });
});
const getOtherGoods = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const headphones = yield headphonesService.findAllHeadphones();
    const speakers = yield speakersService.findAllSpeakers();
    const earphones = yield earphonesService.findAllEarphones();
    const otherGoods = [
        headphones[Math.floor(Math.random() * headphones.length)],
        earphones[Math.floor(Math.random() * earphones.length)],
        speakers[Math.floor(Math.random() * speakers.length)],
    ];
    if (otherGoods.length !== 0) {
        return res.status(200).json(otherGoods);
    }
    res.status(404).json({ message: "Not found" });
});
module.exports = {
    getNewGoods,
    getGoodsById,
    getOtherGoods,
};

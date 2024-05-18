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
const service = require("../service/orders");
const orderSchema_1 = require("../validation/orderSchema");
const postNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length !== 0) {
        if (yield orderSchema_1.orderSchema
            .validate(req.body)
            .then(() => true)
            .catch(() => false)) {
            const result = yield service.postNewOrder(req.body);
            if (result) {
                return res.status(200).json({ addedOrder: true });
            }
        }
        return res.status(200).json({ addedOrder: false });
    }
    res.status(404).json({ message: "Not found" });
});
module.exports = { postNewOrder };

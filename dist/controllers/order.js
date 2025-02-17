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
const sendGridMailer_1 = require("../service/sendGridMailer");
const postNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(req.body).length !== 0) {
        if ((yield orderSchema_1.orderSchema
            .validate(req.body.shippingData)
            .then(() => true)
            .catch(() => false)) &&
            (yield orderSchema_1.orderProductsSchema
                .validate(req.body.products)
                .then(() => true)
                .catch(() => false))) {
            const result = yield service.postNewOrder(req.body);
            if (result) {
                (0, sendGridMailer_1.sendEmail)(req.body);
                return res.status(201).json({ addedOrder: true });
            }
        }
        return res.status(400).json({ addedOrder: false });
    }
    res.status(404).json({ message: "Not found" });
});
module.exports = { postNewOrder };

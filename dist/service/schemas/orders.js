"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const ordersSchema = new Schema({
    shippingData: {
        name: String,
        email: String,
        phone: String,
        address: String,
        zip: String,
        city: String,
        country: String,
        radioValue: String,
        eMoneyNumber: String,
        eMoneyPin: String,
    },
    products: [
        {
            id: String,
            name: String,
            quantity: Number,
            price: Number,
            picture: String,
            totalPrice: Number,
            category: String,
        },
    ],
}, { versionKey: false, timestamp: true });
exports.Orders = model("Orders", ordersSchema, "orders");

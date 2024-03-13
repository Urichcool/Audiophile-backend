"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goods = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const goodsSchema = new Schema({
    id: Number,
    slug: String,
    name: String,
    image: {
        mobile: String,
        tablet: String,
        desktop: String,
    },
    category: String,
    categoryImage: {
        mobile: String,
        tablet: String,
        desktop: String,
    },
    new: Boolean,
    price: Number,
    description: String,
    features: String,
    includes: [
        {
            quantity: Number,
            item: String,
        },
        {
            quantity: Number,
            item: String,
        },
        {
            quantity: Number,
            item: String,
        },
        {
            quantity: Number,
            item: String,
        },
        {
            quantity: Number,
            item: String,
        },
    ],
    gallery: {
        first: {
            mobile: String,
            tablet: String,
            desktop: String,
        },
        second: {
            mobile: String,
            tablet: String,
            desktop: String,
        },
        third: {
            mobile: String,
            tablet: String,
            desktop: String,
        },
    },
    stock: Number
}, { versionKey: false, timestamp: true });
exports.Goods = model("Goods", goodsSchema, "goods");

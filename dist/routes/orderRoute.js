"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordersController = require("../controllers/order");
const orderRoute = express_1.default.Router();
orderRoute.post("/new", ordersController.postNewOrder);
module.exports = { orderRoute };

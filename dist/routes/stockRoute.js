"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stockController = require("../controllers/stock");
const stockRoute = express_1.default.Router();
/**
 * @openapi
 * /stock/check/{goodsId}:
 *   get:
 *     summary: Get specific product stock by id
 *     tags: [Stock]
 *     parameters:
 *       - in: path
 *         name: goodsId
 *         required: true
 *     responses:
 *       200:
 *         description: Product stock data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: sting
 *                   example: product
 *                 stock:
 *                   type: number
 *                   example: 50
 *       404:
 *         description: Not found error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Not found"
 */
stockRoute.get("/check/:goodsId", stockController.checkStockById);
/**
 * @openapi
 * /stock/check/cart:
 *   post:
 *     summary: Check stock availability for all products in the cart
 *     tags: [Stock]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 quantity:
 *                   type: number
 *                   example: 50
 *     responses:
 *       200:
 *         description: Stock is sufficient for all products in the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isEnoughCartStock:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Not enough stock available
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isEnoughCartStock:
 *                   type: boolean
 *                   example: false
 *       404:
 *         description: Not found error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Not found"
 */
stockRoute.post("/check/cart", stockController.checkCartStock);
/**
 * @openapi
 * /stock/update/stock:
 *   patch:
 *     summary: Reduce stock after order completion
 *     tags: [Stock]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 quantity:
 *                   type: number
 *                   example: 50
 *     responses:
 *       200:
 *         description: Stock updated info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wasUpdated:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Stock wasn't updated info
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 wasUpdated:
 *                   type: boolean
 *                   example: false
 *       404:
 *         description: Not found error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Not found"
 */
stockRoute.patch("/update/stock", stockController.getTheProductsOutOfStock);
module.exports = { stockRoute };

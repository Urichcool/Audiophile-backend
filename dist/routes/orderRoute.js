"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ordersController = require("../controllers/order");
const orderRoute = express_1.default.Router();
/**
 * @openapi
 * /order/new:
 *   post:
 *     summary: Post a new order to the database
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Order"
 *     responses:
 *       201:
 *         description: Order successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 addedOrder:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Order successfully added
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 addedOrder:
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
orderRoute.post("/new", ordersController.postNewOrder);
module.exports = { orderRoute };

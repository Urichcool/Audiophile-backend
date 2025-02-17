"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const goodsController = require("../controllers/goods");
const goodsRoute = express_1.default.Router();
/**
 * @openapi
 * goods/new:
 *   get:
 *     summary: Get product with "new" atribute
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Product with "new" atribute
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found
 */
goodsRoute.get("/new", goodsController.getNewGoods);
/**
 * @openapi
 * goods/other:
 *   get:
 *     summary: Get 3 products to other section from different categories
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: 3 products from different categories
 *         content:
 *           application/json:
 *              schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found
 */
goodsRoute.get("/other", goodsController.getOtherGoods);
/**
 * @openapi
 * goods/{id}:
 *   get:
 *     summary: Get specific product ny id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: specific product by id
 *         content:
 *          application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Not found error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Not found
 */
goodsRoute.get("/:goodsId", goodsController.getGoodsById);
module.exports = { goodsRoute };

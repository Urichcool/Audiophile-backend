"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const headphonesRoute = express_1.default.Router();
const headphonesController = require("../controllers/headphones");
/**
 * @openapi
 * /headphones:
 *   get:
 *     summary: Get all headphones
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of all headphones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *
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
headphonesRoute.get("/", headphonesController.getAllHeadphones);
module.exports = { headphonesRoute };

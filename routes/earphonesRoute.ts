import express from "express";
const earphonesController = require("../controllers/earphones");
const earphonesRoute = express.Router();

/**
 * @openapi
 * /earphones:
 *   get:
 *     summary: Get all earphones
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of all earphones
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

earphonesRoute.get("/", earphonesController.getAllEarphones);

module.exports = { earphonesRoute };

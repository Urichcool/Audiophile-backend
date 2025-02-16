import express from "express";
const speakersController = require("../controllers/speakers");
const speakersRoute = express.Router();

/**
 * @openapi
 * /speakers:
 *   get:
 *     summary: Get all speakers
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of all speakers
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

speakersRoute.get("/", speakersController.getAllSpeakers);

module.exports = { speakersRoute };

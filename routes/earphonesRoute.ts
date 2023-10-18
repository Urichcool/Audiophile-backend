import express from "express";
const earphonesRoute = express.Router();
const earphonesController = require("../controllers/earphones");

earphonesRoute.get("/", earphonesController.getAllEarphones);

module.exports = { earphonesRoute };

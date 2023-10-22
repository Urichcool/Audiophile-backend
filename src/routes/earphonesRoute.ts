import express from "express";
const earphonesController = require("../controllers/earphones");
const earphonesRoute = express.Router();

earphonesRoute.get("/", earphonesController.getAllEarphones);

module.exports = { earphonesRoute };

import express from "express";
const headphonesRoute = express.Router();
const headphonesController = require("../controllers/headphones");

headphonesRoute.get("/", headphonesController.getAllHeadphones);

module.exports = { headphonesRoute };

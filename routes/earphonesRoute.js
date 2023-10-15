const expess = require("express");
const earphonesRoute = expess.Router();
const earphonesController = require("../controllers/earphones");

earphonesRoute.get("/", earphonesController.getAllEarphones);

module.exports = {earphonesRoute}
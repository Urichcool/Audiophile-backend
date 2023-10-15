const expess = require("express");
const headphonesRoute = expess.Router();
const headphonesController = require("../controllers/headphones");

headphonesRoute.get("/", headphonesController.getAllHeadphones);


module.exports = { headphonesRoute };
const expess = require("express");
const homeRouter = expess.Router();
const goodsController = require("../controllers/goods")

homeRouter.get("/home/new", goodsController.getNewGoods);

module.exports = { homeRouter };

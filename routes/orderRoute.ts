import express from "express";
const ordersController = require("../controllers/order");
const orderRoute = express.Router();

orderRoute.post("/new", ordersController.postNewOrder);

module.exports = { orderRoute };
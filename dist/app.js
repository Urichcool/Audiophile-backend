"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const HttpException_1 = require("./exceptions/HttpException");
const morgan = require("morgan");
const cors = require("cors");
const { goodsRoute } = require("./routes/goodsRoute");
const { headphonesRoute } = require("./routes/headphonesRoute");
const { speakersRoute } = require("./routes/speakersRoute");
const { earphonesRoute } = require("./routes/earphonesRoute");
const { stockRoute } = require("./routes/stockRoute");

const { orderRoute } = require("./routes/orderRoute");

const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static("public"));
app.use(morgan("tiny"));
app.use(cors());
app.use("/goods", goodsRoute);
app.use("/headphones", headphonesRoute);
app.use("/speakers", speakersRoute);
app.use("/earphones", earphonesRoute);
app.use("/stock", stockRoute);
app.use("/order", orderRoute);
app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});
app.use((err, req, res, next) => {
    if (err instanceof HttpException_1.HttpException) {
        res.status(500).json({ message: err.message });
    }
    next();
});
app.use((err, req, res, next) => {
    if (err instanceof HttpException_1.HttpException) {
        res.status(err.status || 500);
        res.json({ message: err.message, status: err.status });
    }
    next();
});
module.exports = app;

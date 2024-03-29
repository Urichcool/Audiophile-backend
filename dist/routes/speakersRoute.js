"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const speakersController = require("../controllers/speakers");
const speakersRoute = express_1.default.Router();
speakersRoute.get("/", speakersController.getAllSpeakers);
module.exports = { speakersRoute };

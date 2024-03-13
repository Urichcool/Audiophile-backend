import express from "express";
const speakersController = require("../controllers/speakers");
const speakersRoute = express.Router();


speakersRoute.get("/", speakersController.getAllSpeakers);

module.exports = { speakersRoute };

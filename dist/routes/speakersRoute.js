"use strict";
const expess = require("express");
const speakersRoute = expess.Router();
const speakersController = require("../controllers/speakers");
speakersRoute.get('/', speakersController.getAllSpeakers);
module.exports = { speakersRoute };

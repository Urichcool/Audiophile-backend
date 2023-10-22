"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = require("../db/conection");
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, conection_1.connectMongo)();
}));
describe("errors test", () => {
    test("incorrect route", () => __awaiter(void 0, void 0, void 0, function* () {
        const incorrectRoute = yield supertest(app).get("/goods/");
        expect(incorrectRoute.statusCode).toBe(404);
        expect(incorrectRoute._body).toEqual({ message: "Not found" });
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, conection_1.closeMongo)();
}));

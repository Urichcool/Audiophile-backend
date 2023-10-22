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
describe("headphones test", () => {
    test("return all headphones", () => __awaiter(void 0, void 0, void 0, function* () {
        const headphonesController = yield supertest(app).get("/headphones");
        expect(headphonesController.statusCode).toBe(200);
        expect(typeof headphonesController._body[0].slug).toBe("string");
        expect(typeof headphonesController._body[0].name).toBe("string");
        expect(typeof headphonesController._body[0].image).toBe("object");
        expect(headphonesController._body[0].category).toBe("headphones");
        expect(typeof headphonesController._body[0].categoryImage).toBe("object");
        expect(typeof headphonesController._body[0].new).toBe("boolean");
        expect(typeof headphonesController._body[0].price).toBe("number");
        expect(typeof headphonesController._body[0].description).toBe("string");
        expect(typeof headphonesController._body[0].features).toBe("string");
        expect(Array.isArray(headphonesController._body[0].includes)).toBe(true);
        expect(typeof headphonesController._body[0].gallery).toBe("object");
        expect(typeof headphonesController._body[0]._id).toBe("string");
        expect(headphonesController._body[0]._id.length).toBe(24);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, conection_1.closeMongo)();
}));

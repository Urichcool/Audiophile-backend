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
const testGoodsById_1 = require("./testGoodsById");
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, conection_1.connectMongo)();
}));
describe("new goods test", () => {
    test("return new goods", () => __awaiter(void 0, void 0, void 0, function* () {
        const goodsController = yield supertest(app).get("/goods/new");
        expect(goodsController.statusCode).toBe(200);
        expect(typeof goodsController._body).toBe("object");
        expect(typeof goodsController._body.slug).toBe("string");
        expect(typeof goodsController._body.name).toBe("string");
        expect(typeof goodsController._body.image).toBe("object");
        expect(typeof goodsController._body.category).toBe("string");
        expect(typeof goodsController._body.categoryImage).toBe("object");
        expect(goodsController._body.new).toBe(true);
        expect(typeof goodsController._body.price).toBe("number");
        expect(typeof goodsController._body.description).toBe("string");
        expect(typeof goodsController._body.features).toBe("string");
        expect(Array.isArray(goodsController._body.includes)).toBe(true);
        expect(typeof goodsController._body.gallery).toBe("object");
        expect(typeof goodsController._body._id).toBe("string");
        expect(goodsController._body._id.length).toBe(24);
    }));
});
describe("goods by id test", () => {
    test("return goods by id", () => __awaiter(void 0, void 0, void 0, function* () {
        const goodsByIdController = yield supertest(app).get("/goods/652bdfecc2dd2dacebf6e267");
        expect(goodsByIdController.statusCode).toBe(200);
        expect(goodsByIdController._body).toEqual(testGoodsById_1.testGoodsById);
        expect(goodsByIdController._body._id.length).toBe(24);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, conection_1.closeMongo)();
}));

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
        expect(typeof goodsController._body.previewImage).toBe("object");
    }));
});
describe("goods by id test", () => {
    test("correct id", () => __awaiter(void 0, void 0, void 0, function* () {
        const goodsByIdController = yield supertest(app).get("/goods/652bdfecc2dd2dacebf6e267");
        expect(goodsByIdController.statusCode).toBe(200);
        expect(goodsByIdController._body._id).toBe("652bdfecc2dd2dacebf6e267");
        expect(goodsByIdController._body.name).toBe("XX99 Mark II Headphones");
        expect(goodsByIdController._body._id.length).toBe(24);
        expect(typeof goodsByIdController._body.slug).toBe("string");
        expect(typeof goodsByIdController._body.image).toBe("object");
        expect(typeof goodsByIdController._body.category).toBe("string");
        expect(typeof goodsByIdController._body.categoryImage).toBe("object");
        expect(typeof goodsByIdController._body.new).toBe("boolean");
        expect(typeof goodsByIdController._body.price).toBe("number");
        expect(typeof goodsByIdController._body.description).toBe("string");
        expect(typeof goodsByIdController._body.features).toBe("string");
        expect(Array.isArray(goodsByIdController._body.includes)).toBe(true);
        expect(typeof goodsByIdController._body.gallery).toBe("object");
        expect(typeof goodsByIdController._body.previewImage).toBe("object");
    }));
    test("incorrect id", () => __awaiter(void 0, void 0, void 0, function* () {
        const goodsByIdController = yield supertest(app).get("/goods/652bdfecc2dd2dacebf6e303");
        expect(goodsByIdController.statusCode).toBe(404);
        expect(goodsByIdController._body).toEqual({ message: "Not found" });
    }));
});
describe("other goods test", () => {
    test("return arr of other goods", () => __awaiter(void 0, void 0, void 0, function* () {
        const otherGoodsController = yield supertest(app).get("/goods/other");
        expect(otherGoodsController.statusCode).toBe(200);
        expect(otherGoodsController._body.length).toBe(3);
        expect(otherGoodsController._body[0].category).toBe("headphones");
        expect(otherGoodsController._body[1].category).toBe("earphones");
        expect(otherGoodsController.body[2].category).toBe("speakers");
        expect(typeof otherGoodsController._body[0].slug).toBe("string");
        expect(typeof otherGoodsController._body[0].name).toBe("string");
        expect(typeof otherGoodsController._body[0].image).toBe("object");
        expect(typeof otherGoodsController._body[0].categoryImage).toBe("object");
        expect(typeof otherGoodsController._body[0].new).toBe("boolean");
        expect(typeof otherGoodsController._body[0].price).toBe("number");
        expect(typeof otherGoodsController._body[0].description).toBe("string");
        expect(typeof otherGoodsController._body[0].features).toBe("string");
        expect(Array.isArray(otherGoodsController._body[0].includes)).toBe(true);
        expect(typeof otherGoodsController._body[0].gallery).toBe("object");
        expect(typeof otherGoodsController._body[0].previewImage).toBe("object");
        expect(typeof otherGoodsController._body[0]._id).toBe("string");
        expect(otherGoodsController._body[0]._id.length).toBe(24);
    }));
});
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, conection_1.closeMongo)();
}));

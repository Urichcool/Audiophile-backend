import { connectMongo, closeMongo } from "../db/conection";
import { testGoodsById } from "./testGoodsById";
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();

beforeAll(async () => {
  await connectMongo();
});

describe("new goods test", () => {
  test("return new goods", async () => {
    const goodsController = await supertest(app).get("/goods/new");
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
  });
});

describe("goods by id test", () => {
  test("return goods by id", async () => {
    const goodsByIdController = await supertest(app).get(
      "/goods/652bdfecc2dd2dacebf6e267"
      );
      expect(goodsByIdController.statusCode).toBe(200);
      expect(goodsByIdController._body).toEqual(testGoodsById)
    expect(goodsByIdController._body._id.length).toBe(24);
  });
});

afterAll(async () => {
  await closeMongo();
});

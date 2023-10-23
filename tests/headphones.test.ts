import { connectMongo, closeMongo } from "../db/conection";
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();

beforeAll(async () => {
  await connectMongo();
});

describe("headphones test", () => {
  test("return all headphones", async () => {
    const headphonesController = await supertest(app).get("/headphones");
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
  });
});

afterAll(async () => {
  await closeMongo();
});

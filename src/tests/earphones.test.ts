import { connectMongo, closeMongo } from "../db/conection";
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();

beforeAll(async () => {
 await connectMongo();
});


describe("get all earphones test", () => {
  test("return all earphones", async () => {
    const earphonesController = await supertest(app).get("/earphones");
    expect(earphonesController.statusCode).toBe(200);
    expect(typeof earphonesController._body[0].slug).toBe("string");
    expect(typeof earphonesController._body[0].name).toBe("string");
    expect(typeof earphonesController._body[0].image).toBe("object");
    expect(earphonesController._body[0].category).toBe("earphones");
    expect(typeof earphonesController._body[0].categoryImage).toBe("object");
    expect(typeof earphonesController._body[0].new).toBe("boolean");
    expect(typeof earphonesController._body[0].price).toBe("number");
    expect(typeof earphonesController._body[0].description).toBe("string");
    expect(typeof earphonesController._body[0].features).toBe("string");
    expect(Array.isArray(earphonesController._body[0].includes)).toBe(true);
    expect(typeof earphonesController._body[0].gallery).toBe("object");
    expect(typeof earphonesController._body[0]._id).toBe("string");
    expect(earphonesController._body[0]._id.length).toBe(24);
  });
});

afterAll(async () => {
  await closeMongo();
});

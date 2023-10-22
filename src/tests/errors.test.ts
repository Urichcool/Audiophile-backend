import { connectMongo, closeMongo } from "../db/conection";
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();

beforeAll(async () => {
  await connectMongo();
});

describe("errors test", () => {
  test("incorrect route", async () => {
    const incorrectRoute = await supertest(app).get("/goods/");
    expect(incorrectRoute.statusCode).toBe(404);
    expect(incorrectRoute._body).toEqual({ message: "Not found" });
  });
});

afterAll(async () => {
  await closeMongo();
});

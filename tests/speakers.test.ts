import { connectMongo, closeMongo } from "../db/conection";
const supertest = require("supertest");
const app = require("../app");
require("dotenv").config();

beforeAll(async () => {
  await connectMongo();
});

describe("speakers test", () => {
  test("return all speakers", async () => {
    const speakersController = await supertest(app).get("/speakers");
    expect(speakersController.statusCode).toBe(200);
    expect(typeof speakersController._body[0].slug).toBe("string");
    expect(typeof speakersController._body[0].name).toBe("string");
    expect(typeof speakersController._body[0].image).toBe("object");
    expect(speakersController._body[0].category).toBe("speakers");
    expect(typeof speakersController._body[0].categoryImage).toBe("object");
    expect(typeof speakersController._body[0].new).toBe("boolean");
    expect(typeof speakersController._body[0].price).toBe("number");
    expect(typeof speakersController._body[0].description).toBe("string");
    expect(typeof speakersController._body[0].features).toBe("string");
    expect(Array.isArray(speakersController._body[0].includes)).toBe(true);
    expect(typeof speakersController._body[0].gallery).toBe("object");
    expect(typeof speakersController._body[0]._id).toBe("string");
    expect(speakersController._body[0]._id.length).toBe(24);
  });
});

afterAll(async () => {
  await closeMongo();
});

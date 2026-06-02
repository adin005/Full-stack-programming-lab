const request = require("supertest");
const app = require("../app");

describe("Weather API Integration Tests", () => {

  test("GET /info returns API info", async () => {
    const res = await request(app).get("/info");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });

  test("GET /api/weather/:city works", async () => {
    const res = await request(app)
      .get("/api/weather/Karachi");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
  });

  test("invalid route returns 404", async () => {
    const res = await request(app).get("/random");

    expect(res.statusCode).toBe(404);
  });

});
const request = require("supertest");
const app = require("../app");

describe("News API Integration Tests", () => {

  test("GET /info works", async () => {
    const res = await request(app).get("/info");

    expect(res.statusCode).toBe(200);
  });

  test("GET /api/news/pk works", async () => {
    const res = await request(app).get("/api/news/pk");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
  });

  test("GET search endpoint works", async () => {
    const res = await request(app).get("/api/news/search/cricket");

    expect(res.statusCode).toBe(200);
  });

  test("invalid route returns 404", async () => {
    const res = await request(app).get("/invalid");

    expect(res.statusCode).toBe(404);
  });

});
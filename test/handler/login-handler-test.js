const request = require("supertest");
const { describe, it } = require("node:test");
const { createApp } = require("../../src/app");

const { UserList } = require("../../src/models/user-list");

describe("GET /login", () => {
  it("should serve login page", (_, done) => {
    const userList = new UserList();
    const app = createApp(userList);

    request(app)
      .get("/login")
      .expect(200)
      .expect("content-type", /text\/html/)
      .end(done);
  });
});

describe("POST /login", () => {
  it("should redirect to home page", (_, done) => {
    const userList = new UserList();
    const app = createApp(userList);

    request(app).post("/login").expect(302).expect("location", "/").end(done);
  });
});

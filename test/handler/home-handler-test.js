const request = require("supertest");
const { describe, it } = require("node:test");

const { createApp } = require("../../src/app");
const { UserList } = require("../../src/models/user-list");

describe("GET /", () => {
  it("should serve home page", (_, done) => {
    const userList = new UserList();
    const app = createApp(userList);
    app.ROOT_DIR = process.env.PWD;

    request(app)
      .get("/")
      .expect(200)
      .expect("content-type", /text\/html/)
      .end(done);
  });

  it("should give error status if error occured", (_, done) => {
    const userList = new UserList();
    const app = createApp(userList);
    app.ROOT_DIR = "/invalid-pwd";

    request(app).get("/").expect(500).end(done);
  });
});

describe("POST /", () => {
  it("should redirect to login page as no user logged in", (_, done) => {
    const userList = new UserList();
    const app = createApp(userList);

    request(app)
      .post("/")
      .send({ name: "Django" })
      .expect(302)
      .expect("location", "/login")
      .end(done);
  });
});

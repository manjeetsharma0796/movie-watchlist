const request = require("supertest");
const { describe, it } = require("node:test");

const { UserList } = require("../../src/models/user-list");
const { createApp } = require("../../src/app");

describe("GET /logout", () => {
  it("should remove cookie and logout user", (_, done) => {
    const userList = new UserList();
    const app = createApp(userList);

    request(app).get("/logout").expect(302).expect("location", "/").end(done);
  });
});

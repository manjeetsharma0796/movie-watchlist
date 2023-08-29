const { describe, it } = require("node:test");
const assert = require("assert");
const { parseCookie } = require("../../src/middleware/cookie-parser");

describe("cookieParser", () => {
  it("should be empty if no cookie passed", () => {
    const emptyFn = () => {};
    const request = { headers: {} };

    parseCookie(request, emptyFn, emptyFn);
    assert.deepStrictEqual(request.cookies, {});
  });

  it("should parse raw cookie", () => {
    const emptyFn = () => {};
    const request = { headers: { cookie: "username=Jerry" } };

    parseCookie(request, emptyFn, emptyFn);

    assert.deepStrictEqual(request.cookies, { username: "Jerry" });
  });

  it("should parse multiple raw cookie", () => {
    const emptyFn = () => {};
    const request = { headers: { cookie: "username=Jerry; initials=J" } };

    parseCookie(request, emptyFn, emptyFn);

    assert.deepStrictEqual(request.cookies, {
      username: "Jerry",
      initials: "J",
    });
  });
});

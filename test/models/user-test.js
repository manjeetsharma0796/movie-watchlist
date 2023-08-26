const { describe, it } = require("node:test");
const assert = require("assert");
const { User } = require("../../src/models/user");

describe("User", () => {
  describe("addMovie", () => {
    it("should add movie using provided details", () => {
      const user = new User();

      user.addMovie("Social123", false, false);
      assert.deepStrictEqual(user.moviesDetails, [
        {
          name: "Social123",
          isWatched: false,
          isRecommended: false,
          movieID: 0,
        },
      ]);
    });
  });
});

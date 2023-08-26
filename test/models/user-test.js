const { describe, it } = require("node:test");
const assert = require("assert");
const { User } = require("../../src/models/user");

describe("User", () => {
  describe("addMovie", () => {
    it("should add movie using provided movie details", () => {
      const user = new User();

      user.addMovie("Social123", false, false);
      assert.deepStrictEqual(user.movieList, [
        {
          name: "Social123",
          isWatched: false,
          isRecommended: false,
          movieID: 0,
        },
      ]);
    });
  });

  describe("deleteMovie", () => {
    it("should delete movie using provided movie id", () => {
      const user = new User();

      user.addMovie("Social123", false, false);
      user.addMovie("Delhite", false, false);
      user.deleteMovie(0);

      assert.deepStrictEqual(user.movieList, [
        {
          name: "Delhite",
          isWatched: false,
          isRecommended: false,
          movieID: 1,
        },
      ]);
    });
  });

  describe("details", () => {
    it("should provide watchlist, userID, username of user", () => {
      const user = new User("Jerry", 0);

      user.addMovie("Social123", false, false);
      user.addMovie("Delhite", false, false);
      const expectedDetails = {
        userID: 0,
        username: "Jerry",
        watchList: [
          {
            isRecommended: false,
            isWatched: false,
            movieID: 0,
            name: "Social123",
          },
          {
            isRecommended: false,
            isWatched: false,
            movieID: 1,
            name: "Delhite",
          },
        ],
      };

      assert.deepStrictEqual(user.details, expectedDetails);
    });
  });
});

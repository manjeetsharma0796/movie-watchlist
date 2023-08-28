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
    it("should provide watchlist of user", () => {
      const user = new User("Jerry", 0);

      user.addMovie("Social123", false, false);
      user.addMovie("Delhite", false, false);
      const expectedDetails = {
        username: "Jerry",
        watchlist: [
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

  describe("updateWatchStatus", () => {
    it("should update watch status of movie using provided value", () => {
      const user = new User("Jeremy", 0);

      user.addMovie("Ted", false, false);
      assert.strictEqual(user.movieList[0].isWatched, false);

      user.updateWatchStatus(0, true);
      assert.strictEqual(user.movieList[0].isWatched, true);
    });
  });

  describe("updateRecommendation", () => {
    it("should update recommendation of movie using provided value", () => {
      const user = new User("Jeremy", 0);

      user.addMovie("Ted", false, false);
      assert.strictEqual(user.movieList[0].isRecommended, false);

      user.updateRecommendation(0, true);
      assert.strictEqual(user.movieList[0].isRecommended, true);
    });
  });
});

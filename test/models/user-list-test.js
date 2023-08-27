const { describe, it } = require("node:test");
const assert = require("assert");
const { UserList } = require("../../src/models/user-list");

describe("UserList", () => {
  describe("getUserMovieList", () => {
    it("should get user details using provided userID", () => {
      const userList = new UserList();
      userList.addUser("Tom");

      assert.deepStrictEqual(userList.getUserMovieList(0), []);
    });
  });

  describe("addUser", () => {
    it("should add user to list by provided username", () => {
      const userList = new UserList();

      userList.addUser("Jeremy");
      assert.deepStrictEqual(userList.usersDetails.length, 1);
    });
  });

  describe("addMovie", () => {
    it("should add movie to user watchlist", () => {
      const userList = new UserList();
      userList.addUser("Jerry");
      userList.addMovie("Pulp Fiction", 0, false, false);

      assert.deepStrictEqual(userList.getUserMovieList(0), [
        {
          name: "Pulp Fiction",
          isWatched: false,
          isRecommended: false,
          movieID: 0,
        },
      ]);
    });
  });

  describe("deleteMovie", () => {
    it("should remove movie from user watchlist", () => {
      const userList = new UserList();
      userList.addUser("Jerry");
      userList.addMovie("Pulp Fiction", 0, false, false);
      userList.addMovie("Batman", 0, false, false);

      userList.deleteMovie(0, 0);

      const expectedMovieList = [
        {
          isRecommended: false,
          isWatched: false,
          movieID: 1,
          name: "Batman",
        },
      ];

      assert.deepStrictEqual(userList.getUserMovieList(0), expectedMovieList);
    });
  });

  describe("updateWatchStatus", () => {
    it("should update watch status of provided movieID of the user", () => {
      const movieID = 0;
      const userID = 0;

      const userList = new UserList();

      userList.addUser("Jerry");
      userList.addMovie("Pulp Fiction", movieID, false, false);
      assert.strictEqual(userList.getWatchStatus(movieID, userID), false);

      userList.updateWatchStatus(movieID, userID, true);
      assert.strictEqual(userList.getWatchStatus(movieID, userID), true);
    });
  });

  describe("updateRecommendation", () => {
    it("should update recommendation of provided movieID of the user", () => {
      const movieID = 0;
      const userID = 0;

      const userList = new UserList();

      userList.addUser("Jerry");
      userList.addMovie("Pulp Fiction", movieID, false, false);
      assert.strictEqual(userList.getRecommendation(movieID, userID), false);

      userList.updateRecommendation(movieID, userID, true);
      assert.strictEqual(userList.getRecommendation(movieID, userID), true);
    });
  });
});

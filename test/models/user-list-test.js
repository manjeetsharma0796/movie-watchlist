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
      assert.deepStrictEqual(userList.userCount, 1);
    });
  });

  describe("addMovie", () => {
    it("should add movie to user watchlist by provided userID", () => {
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
});

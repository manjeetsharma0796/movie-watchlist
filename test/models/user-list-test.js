const { describe, it } = require("node:test");
const assert = require("assert");
const { UserList } = require("../../src/models/user-list");

describe("UserList", () => {
  describe("getUserMovieList", () => {
    it("should get user details using provided username", () => {
      const username = "Tom";
      const userList = new UserList();
      userList.addUser(username);

      assert.deepStrictEqual(userList.getUserMovieList(username), []);
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
      const username = "Jerry";
      const userList = new UserList();
      userList.addUser(username);
      userList.addMovie("Pulp Fiction", "Jerry", false, false);

      assert.deepStrictEqual(userList.getUserMovieList(username), [
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
      const username = "Jerry";
      const userList = new UserList();
      userList.addUser(username);
      userList.addMovie("Pulp Fiction", username, false, false);
      userList.addMovie("Batman", username, false, false);

      userList.deleteMovie(0, username);

      const expectedMovieList = [
        {
          isRecommended: false,
          isWatched: false,
          movieID: 1,
          name: "Batman",
        },
      ];

      assert.deepStrictEqual(
        userList.getUserMovieList(username),
        expectedMovieList
      );
    });
  });

  describe("updateWatchStatus", () => {
    it("should update watch status of provided movieID of the user", () => {
      const movieID = 0;
      const username = "Jerry";

      const userList = new UserList();

      userList.addUser(username);
      userList.addMovie("Pulp Fiction", username, false, false);
      assert.strictEqual(userList.getWatchStatus(movieID, username), false);

      userList.updateWatchStatus(movieID, username, true);
      assert.strictEqual(userList.getWatchStatus(movieID, username), true);
    });
  });

  describe("updateRecommendation", () => {
    it("should update recommendation of provided movieID of the user", () => {
      const movieID = 0;
      const username = "Jerry";

      const userList = new UserList();

      userList.addUser(username);
      userList.addMovie("Pulp Fiction", username, false, false);
      assert.strictEqual(userList.getRecommendation(movieID, username), false);

      userList.updateRecommendation(movieID, username, true);
      assert.strictEqual(userList.getRecommendation(movieID, username), true);
    });
  });
});

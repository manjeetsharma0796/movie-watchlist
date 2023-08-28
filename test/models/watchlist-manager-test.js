const { describe, it } = require("node:test");
const assert = require("assert");

const { UserList } = require("../../src/models/user-list");
const { WatchlistManager } = require("../../src/models/watchlist-manager");

describe("WatchlistManager", () => {
  describe("addUser", () => {
    it("should add user by provided username", () => {
      const username = "Jerry";

      const userlist = new UserList();
      const watchlistManager = new WatchlistManager(userlist);

      watchlistManager.addUser(username);

      const expectedUsersList = [
        {
          username: "Jerry",
          watchList: [],
        },
      ];

      assert.deepStrictEqual(watchlistManager.usersDetails, expectedUsersList);
    });
  });

  describe("addMovie", () => {
    it("should add movie to provided username", () => {
      const username = "Jerry";
      const isWatched = false;
      const isRecommended = false;

      const userlist = new UserList();
      const watchlistManager = new WatchlistManager(userlist);

      watchlistManager.addUser(username);

      watchlistManager.addMovie("Lucia", username, isWatched, isRecommended);

      const expectedMovieList = [
        { name: "Lucia", movieID: 0, isWatched: false, isRecommended: false },
      ];

      assert.deepStrictEqual(
        watchlistManager.getUserMovieList(username),
        expectedMovieList
      );
    });
  });

  describe("deleteMovie", () => {
    it("should delete movie to provided username", () => {
      const username = "Jerry";
      const isWatched = false;
      const isRecommended = false;

      const userlist = new UserList();
      const watchlistManager = new WatchlistManager(userlist);

      watchlistManager.addUser(username);
      watchlistManager.addMovie("Lucia", username, isWatched, isRecommended);
      watchlistManager.deleteMovie(0, username);

      const expectedMovieList = [];

      assert.deepStrictEqual(
        watchlistManager.getUserMovieList(username),
        expectedMovieList
      );
    });
  });

  describe("usersDetails", () => {
    it("should give all users details with movielist", () => {
      const userlist = new UserList();
      const watchlistManager = new WatchlistManager(userlist);

      watchlistManager.addUser("Jerry");
      watchlistManager.addUser("Tom");

      const expectedUsersDetails = [
        { username: "Jerry", watchList: [] },
        { username: "Tom", watchList: [] },
      ];
      
      assert.deepStrictEqual(
        watchlistManager.usersDetails,
        expectedUsersDetails
      );
    });
  });
});

class WatchlistManager {
  #userList;

  constructor(userList) {
    this.#userList = userList;
  }

  addUser(username) {
    this.#userList.addUser(username);
  }

  addMovie(movieName, username, isWatched = false, isRecommended = false) {
    this.#userList.addMovie(movieName, username, isWatched, isRecommended);
  }

  deleteMovie(movieID, username) {
    this.#userList.deleteMovie(movieID, username);
  }

  get usersDetails() {
    return this.#userList.usersDetails;
  }

  getUserMovieList(username) {
    return this.#userList.getUserMovieList(username);
  }
}

module.exports = { WatchlistManager };

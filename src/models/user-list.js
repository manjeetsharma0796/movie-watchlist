const { User } = require("./user");

class UserList {
  #userList;

  constructor() {
    this.#userList = [];
  }

  #findUser(username) {
    return this.#userList.find((user) => {
      return user.username === username;
    });
  }

  get usersDetails() {
    return this.#userList.map((user) => user.details);
  }

  getUserMovieList(username) {
    const user = this.#findUser(username);

    return user.movieList;
  }

  getWatchStatus(movieID, username) {
    const user = this.#findUser(username);
    return user.getWatchStatus(movieID);
  }

  getRecommendation(movieID, username) {
    const user = this.#findUser(username);
    return user.getRecommendation(movieID);
  }

  addUser(username) {
    const user = new User(username);
    this.#userList.push(user);
  }

  addMovie(movieName, username, isWatched, isRecommended) {
    const user = this.#findUser(username);
    user.addMovie(movieName, isWatched, isRecommended);
  }

  deleteMovie(movieID, username) {
    const user = this.#findUser(username);
    user.deleteMovie(movieID);
  }

  updateWatchStatus(movieID, username, isWatched) {
    const user = this.#findUser(username);
    user.updateWatchStatus(movieID, isWatched);
  }

  updateRecommendation(movieID, username, isRecommended) {
    const user = this.#findUser(username);
    user.updateRecommendation(movieID, isRecommended);
  }
}

module.exports = { UserList };

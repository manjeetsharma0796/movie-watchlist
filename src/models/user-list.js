const { User } = require("./user");

class UserList {
  #userList;
  #userCount;

  constructor() {
    this.#userList = [];
    this.#userCount = 0;
  }

  #incrementUserCount() {
    this.#userCount += 1;
  }

  #findUser(userID) {
    return this.#userList.find((user) => user.id === userID);
  }

  get usersDetails() {
    return this.#userList.map((user) => user.details);
  }

  getUserMovieList(userID) {
    const user = this.#findUser(userID);
    return user.movieList;
  }

  getWatchStatus(movieID, userID) {
    const user = this.#findUser(userID);
    return user.getWatchStatus(movieID);
  }

  getRecommendation(movieID, userID) {
    const user = this.#findUser(userID);
    return user.getRecommendation(movieID);
  }

  addUser(username) {
    const userID = this.#userCount;
    const user = new User(username, userID);

    this.#userList.push(user);
    this.#incrementUserCount();
  }

  addMovie(movieName, userID, isWatched, isRecommended) {
    const user = this.#findUser(userID);
    user.addMovie(movieName, isWatched, isRecommended);
  }

  deleteMovie(movieID, userID) {
    const user = this.#findUser(userID);
    user.deleteMovie(movieID);
  }

  updateWatchStatus(movieID, userID, isWatched) {
    const user = this.#findUser(userID);
    user.updateWatchStatus(movieID, isWatched);
  }

  updateRecommendation(movieID, userID, isRecommended) {
    const user = this.#findUser(userID);
    user.updateRecommendation(movieID, isRecommended);
  }
}

module.exports = { UserList };

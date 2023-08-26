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

  getUserMovieList(userID) {
    const user = this.#findUser(userID);
    return user.movieList;
  }

  get userCount() {
    return this.#userCount;
  }
}

module.exports = { UserList };

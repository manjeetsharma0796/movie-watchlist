const { Movie } = require("./movie");

class User {
  #username;
  #userID;
  #movies;
  #moviesCount;

  constructor(username, userID) {
    this.#username = username;
    this.#userID = userID;
    this.#movies = [];
    this.#moviesCount = 0;
  }

  #incrementMoviesCount() {
    this.#moviesCount = this.#moviesCount + 1;
  }

  get id() {
    return this.#userID;
  }

  get movieList() {
    return this.#movies.map((movie) => movie.details);
  }

  get details() {
    const watchList = this.#movies.map((movie) => movie.details);
    return { userID: this.#userID, username: this.#username, watchList };
  }

  addMovie(name, isWatched, isRecommended) {
    const movieID = this.#movies.length;
    const movie = new Movie(name, movieID, isWatched, isRecommended);

    this.#movies.push(movie);
    this.#incrementMoviesCount();
  }

  deleteMovie(movieID) {
    this.#movies = this.#movies.filter((movie) => movieID !== movie.movieID);
  }
}

module.exports = { User };

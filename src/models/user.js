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

  #findMovie(movieID) {
    return this.#movies.find((movie) => movieID === movie.movieID);
  }

  getWatchStatus(movieID) {
    const movie = this.#findMovie(movieID);
    return movie.isWatched;
  }

  getRecommendation(movieID) {
    const movie = this.#findMovie(movieID);
    return movie.isRecommended;
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

  updateWatchStatus(movieID, isWatched) {
    const movie = this.#findMovie(movieID);
    movie.updateWatchStatus(isWatched);
  }

  updateRecommendation(movieID, isRecommended) {
    const movie = this.#findMovie(movieID);
    movie.updateRecommendation(isRecommended);
  }
}

module.exports = { User };

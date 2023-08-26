const { Movie } = require("./movie");

class User {
  #movies;
  #moviesCount;

  constructor() {
    this.#movies = [];
    this.#moviesCount = 0;
  }

  #incrementMoviesCount() {
    this.#moviesCount = this.#moviesCount + 1;
  }

  addMovie(name, isWatched, isRecommended) {
    const movieID = this.#movies.length;
    const movie = new Movie(name, movieID, isWatched, isRecommended);

    this.#movies.push(movie);
    this.#incrementMoviesCount();
  }

  get moviesDetails() {
    return this.#movies.map((movie) => movie.details);
  }
}

module.exports = { User };

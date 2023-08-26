const { Movie } = require("./movie");

class User {
  // eslint-disable-next-line no-unused-private-class-members
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

  addMovie(name, isWatched, isRecommended) {
    const movieID = this.#movies.length;
    const movie = new Movie(name, movieID, isWatched, isRecommended);

    this.#movies.push(movie);
    this.#incrementMoviesCount();
  }

  get id() {
    const id = this.#userID;
    return id;
  }

  get movieList() {
    return this.#movies.map((movie) => movie.details);
  }
}

module.exports = { User };

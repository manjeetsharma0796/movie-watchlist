class Movie {
  #name;
  #isWatched;
  #isRecommended;
  #movieID;

  constructor(name, movieID, isWatched = false, isRecommended = false) {
    this.#name = name;
    this.#movieID = movieID;
    this.#isWatched = isWatched;
    this.#isRecommended = isRecommended;
  }

  updateWatchStatus(isWatched) {
    this.#isWatched = isWatched;
  }

  updateRecommendation(isRecommended) {
    this.#isRecommended = isRecommended;
  }

  get details() {
    return {
      name: this.#name,
      isWatched: this.#isWatched,
      isRecommended: this.#isRecommended,
      movieID: this.#movieID,
    };
  }
}

module.exports = { Movie };

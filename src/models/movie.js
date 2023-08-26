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

  get movieID() {
    return this.#movieID;
  }

  get details() {
    return {
      name: this.#name,
      movieID: this.#movieID,
      isWatched: this.#isWatched,
      isRecommended: this.#isRecommended,
    };
  }

  updateWatchStatus(isWatched) {
    this.#isWatched = isWatched;
  }

  updateRecommendation(isRecommended) {
    this.#isRecommended = isRecommended;
  }
}

module.exports = { Movie };

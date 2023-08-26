class Movie {
  #name;
  #isWatched;
  #isRecommended;

  constructor(name, isWatched = false, isRecommended = false) {
    this.#name = name;
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
    };
  }
}

module.exports = { Movie };

const { describe, it } = require("node:test");
const assert = require("assert");

const { Movie } = require("../../src/models/movie");

describe("Movie", () => {
  describe("updateWatchStatus", () => {
    it("watch status should be updated to provided value", () => {
      const movieID = 0;
      const movie = new Movie("Antman", movieID, false, false);

      assert.deepStrictEqual(movie.isWatched, false);

      movie.updateWatchStatus(true);
      assert.deepStrictEqual(movie.isWatched, true);
    });
  });

  describe("updateRecommendation", () => {
    it("should update recomendation status to provided value", () => {
      const movieID = 0;
      const movie = new Movie("Antman", movieID, false, false);

      assert.deepStrictEqual(movie.isRecommended, false);

      movie.updateRecommendation(true);
      assert.deepStrictEqual(movie.isRecommended, true);
    });
  });
});

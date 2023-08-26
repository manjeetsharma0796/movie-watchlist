const { describe, it } = require("node:test");
const assert = require("assert");

const { Movie } = require("../src/movie");

describe("Movie", () => {
  describe("updateWatchStatus", () => {
    it("watch status should be true", () => {
      const movie = new Movie("Antman", false, false);

      assert.deepStrictEqual(movie.details, {
        name: "Antman",
        isWatched: false,
        isRecommended: false,
      });

      movie.updateWatchStatus(true);

      assert.deepStrictEqual(movie.details, {
        name: "Antman",
        isWatched: true,
        isRecommended: false,
      });
    });
  });
});

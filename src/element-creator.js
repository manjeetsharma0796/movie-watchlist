const createMovieListElement = (movieList) => {
  const isWatchedIcon = {
    true: "✔️",
    false: "⤬",
  };

  const recommendationIcon = {
    true: "👍",
    false: "👎",
  };

  return movieList
    .map(
      ({ name, isWatched, isRecommended }) =>
        `<section id="movie-details">
          <p>${name}</p> 
          <p>${isWatchedIcon[isWatched]} </p>
          <p>${recommendationIcon[isRecommended]}</p>
        </section>`
    )
    .join("");
};

const generateMovieElement = (req) => {
  const { userList } = req.app;
  const { username } = req.cookies;

  if (!userList.isUserExist(username)) {
    userList.addUser(username);
  }

  const movieList = userList.getUserMovieList(username);
  return createMovieListElement(movieList);
};

module.exports = {
  generateMovieElement,
};

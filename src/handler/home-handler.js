const fs = require("fs");

const { generateMovieElement } = require("../element-creator");
const { updateDatabase } = require("../database");

const render = (req, res, filePath) => {
  fs.readFile(filePath, "utf-8", (err, rawTemplate) => {
    if (err) {
      console.log("serveLogin: error in reading");
      res.status(500).end();
      return;
    }

    const movieListElement = generateMovieElement(req);
    const homeTemplate = rawTemplate.replace(
      "__MOVIE_LIST__",
      movieListElement
    );

    res.send(homeTemplate);
  });
};

const handleHome = (req, res) => {
  if (!("username" in req.cookies)) {
    res.redirect("/login");
    return;
  }

  const status = {
    on: true,
    undefined: false,
  };
  const { userList } = req.app;
  const { name, isRecommended, isWatched } = req.body;

  userList.addMovie(
    name,
    req.cookies.username,
    status[isWatched],
    status[isRecommended]
  );

  updateDatabase(userList.usersDetails, res);
};

const serveHome = (req, res) => {
  const filePath = `${req.app.ROOT_DIR}/public/index.html`;
  render(req, res, filePath);
};

module.exports = { serveHome, handleHome };

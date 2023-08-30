const fs = require("fs");

const { generateMovieElement } = require("../element-creator");
const { updateDatabase } = require("../database");

const ROOT_DIR = process.env.PWD;

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

const responseHandler = {
  onSuccess: () => res.redirect("/"),
  onError: () => res.status(500).end(),
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

  updateDatabase(userList.usersDetails, responseHandler);
};

const serveHome = (req, res) => {
  const filePath = `${ROOT_DIR}/public/index.html`;
  render(req, res, filePath);
};

module.exports = { serveHome, handleHome };

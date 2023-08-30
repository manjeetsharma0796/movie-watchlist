const fs = require("fs");

const DATABASE_PATH = "./watchlist.json";

const readWatchlist = () => {
  const isFileExists = fs.existsSync(DATABASE_PATH);

  if (!isFileExists) {
    fs.writeFileSync(DATABASE_PATH, "[]");
  }

  const watchlist = fs.readFileSync("./watchlist.json", "utf-8");

  return JSON.parse(watchlist);
};

const updateDatabase = (usersWatchlist, response) => {
  fs.writeFile(DATABASE_PATH, JSON.stringify(usersWatchlist), (err) => {
    if (err) {
      console.log("updateDatabase error in write:", err);
      response.status(500).end();
      return;
    }

    response.redirect("/");
  });
};

module.exports = { readWatchlist, updateDatabase };

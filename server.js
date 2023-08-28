const { createApp } = require("./src/app");
const { UserList } = require("./src/models/user-list");
const { readWatchlist } = require("./src/database");

const main = () => {
  const port = 8100;
  const usersWatchlist = readWatchlist();
  const userList = new UserList();

  userList.restore(usersWatchlist);
  const app = createApp(userList);

  app.listen(port, () => console.log("listening on", port));
};

main();

const { createApp } = require("./src/app");
const { UserList } = require("./src/models/user-list");

const main = () => {
  const port = 8100;

  const userList = new UserList();
  const app = createApp(userList);

  app.listen(port, () => console.log("listening on", port));
};

main();

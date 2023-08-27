const { createApp } = require("./src/app");

const main = () => {
  const app = createApp();
  const port = 8100;

  app.listen(port, () => console.log("listening on", port));
};

main();

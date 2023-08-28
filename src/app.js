const express = require("express");

const { serveHome } = require("./handler/home-handler");
const { requestLogger } = require("./middleware/request-logger");
const { parseCookie } = require("./middleware/cookie-parser");
const { serveLogin, handleLogin } = require("./handler/login-handler");

const createApp = (userList) => {
  const app = express();
  app.userList = userList;

  app.use(requestLogger);
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(parseCookie);

  app.get("/", serveHome);
  app.get("/login", serveLogin);
  app.post("/login", handleLogin);
  app.use(express.static("public"));
  return app;
};

module.exports = { createApp };

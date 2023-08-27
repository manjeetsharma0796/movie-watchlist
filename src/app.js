const express = require("express");
const { serveLogin, handleLogin } = require("./handler/login-handler");
const { handleHome } = require("./handler/home-hanlder");
const { requestLogger } = require("./middleware/request-logger");
const { parseCookie } = require("./middleware/cookie-parser");

const createApp = () => {
  const app = express();

  app.use(requestLogger);
  app.use(express.urlencoded());
  app.use(express.json());
  app.use(parseCookie);

  app.get("/", handleHome);
  app.get("/login", serveLogin);
  app.post("/login", handleLogin);
  app.use(express.static("public"));
  return app;
};

module.exports = { createApp };

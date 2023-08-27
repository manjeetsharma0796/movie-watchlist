const ROOT_DIR = process.env.PWD;

const handleLogin = (req, res) => {
  console.log(req.body);

  res.cookie("username", req.body.username);
  res.redirect("/");
};

const serveLogin = (req, res) => {
  console.log("serving login", req.cookies);

  if ("username" in req.cookies) {
    res.redirect("/");
    return;
  }

  const filePath = `${ROOT_DIR}/public/html/login.html`;
  res.sendFile(filePath);
};

module.exports = { handleLogin, serveLogin };

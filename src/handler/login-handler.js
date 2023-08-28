const ROOT_DIR = process.env.PWD;

const handleLogin = (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
};

const serveLogin = (req, res) => {
  const filePath = `${ROOT_DIR}/public/html/login.html`;
  res.sendFile(filePath);
};

module.exports = { serveLogin, handleLogin };

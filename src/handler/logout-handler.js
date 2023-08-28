const handleLogout = (_, res) => {
  res.clearCookie("username");
  res.redirect("/");
};

module.exports = { handleLogout };

const parseCookie = (req, res, next) => {
  const rawCookies = req.headers.cookie;

  if (rawCookies) {
    req.cookies = Object.fromEntries(
      rawCookies.split("; ").map((rawCookie) => rawCookie.split("="))
    );
    next();
    return;
  }

  req.cookies = {};
  next();
};

module.exports = { parseCookie };
